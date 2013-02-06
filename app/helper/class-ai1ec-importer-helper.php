<?php
//
//  class-ai1ec-importer-helper.php
//  all-in-one-event-calendar
//
//  Created by The Seed Studio on 2011-07-13.
//

/**
 * Ai1ec_Importer_Helper class
 *
 * @package Helpers
 * @author time.ly
 **/
class Ai1ec_Importer_Helper {
	/**
	 * _instance class variable
	 *
	 * Class instance
	 *
	 * @var null | object
	 **/
	private static $_instance = NULL;

	/**
	 * Constructor
	 *
	 * Default constructor
	 **/
	private function __construct() { }

	/**
	 * get_instance function
	 *
	 * Return singleton instance
	 *
	 * @return object
	 **/
	static function get_instance() {
		if( self::$_instance === NULL ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * time_array_to_timestamp function
	 *
	 * Converts time array to time string.
	 * Passed array: Array( 'year', 'month', 'day', ['hour', 'min', 'sec', ['tz']] )
	 * Return int: UNIX timestamp in GMT
	 *
	 * @param array $t iCalcreator's time property array (*full* format expected)
	 * @param string $def_timezone Default time zone in case not defined in $t
	 *
	 * @return int UNIX timestamp
	 **/
	function time_array_to_timestamp( $t, $def_timezone ) {
		$ret = $t['value']['year'] .
			'-' . $t['value']['month'] .
			'-' . $t['value']['day'];
		if ( isset( $t['value']['hour'] ) ) {
			$ret .= ' ' . $t['value']['hour'] .
				':' . $t['value']['min'] .
				':' . $t['value']['sec'];
		}
		$timezone = '';
		if ( isset( $t['value']['tz'] ) && $t['value']['tz'] == 'Z' ) {
			$timezone = 'Z';
		}
		elseif ( isset( $t['params']['TZID'] ) ) {
			$timezone = $t['params']['TZID'];
		}

		if ( empty( $timezone ) ) {
			$timezone = $def_timezone;
		} else {
			$timezone = Ai1ec_Tzparser::instance()->get_name( $timezone );
			if ( false === $timezone ) {
				return false;
			}
		}
		if ( $timezone ) {
			$ret .= ' ' . $timezone;
		}
		return strtotime( $ret );
	}

	/**
	 * Gets and parses an iCalendar feed into an array of `Ai1ec_Event' objects
	 *
	 * @param object $feed Row from the ai1ec_event_feeds table
	 *
	 * @return int Number of events imported
	 */
	public function parse_ics_feed( &$feed ) {
		global $ai1ec_events_helper;

		$count = 0;

		$comment_status = 'open';
		if ( isset( $feed->comments_enabled ) && $feed->comments_enabled < 1 ) {
			$comment_status = 'closed';
		}

		$do_show_map = 0;
		if (
			isset( $feed->map_display_enabled ) &&
			$feed->map_display_enabled > 0
		) {
			$do_show_map = 1;
		}

		// set unique id, required if any component UID is missing
		$config = array( 'unique_id' => 'ai1ec' );

		// create new instance
		$v = new vcalendar( array(
			'unique_id' => $feed->feed_url,
			'url'       => $feed->feed_url,
		) );

		// actual parse of the feed
		if ( $v->parse() ) {
			$count = $this->add_vcalendar_events_to_db(
				$v,
				$feed,
				$comment_status,
				$do_show_map
			);
		}

		return $count;
	}

	/**
	 * add_vcalendar_events_to_db method
	 *
	 * Process vcalendar instance - add events to database
	 *
	 * @param vcalendar $v              Calendar to retrieve data from
	 * @param stdClass  $feed           Instance of feed (see Ai1ecIcs plugin)
	 * @param string    $comment_status WP comment status: 'open' or 'closed'
	 * @param int       $do_show_map    Map display status (DB boolean: 0 or 1)
	 *
	 * @return int Count of events added to database
	 */
	public function add_vcalendar_events_to_db(
		vcalendar $v,
		$feed,
		$comment_status,
		$do_show_map = 0
	) {
		global $ai1ec_events_helper;
		$count = 0;
		$do_show_map = Ai1ec_Number_Utility::db_bool( $do_show_map );
		$v->sort();
		// Reverse the sort order, so that RECURRENCE-IDs are listed before the
		// defining recurrence events, and therefore take precedence during
		// caching.
		$v->components = array_reverse( $v->components );

		// TODO: select only VEVENT components that occur after, say, 1 month ago.
		// Maybe use $v->selectComponents(), which takes into account recurrence

		// Fetch default timezone in case individual properties don't define it
		$timezone = $v->getProperty( 'X-WR-TIMEZONE' );
		$timezone = $timezone[1];

		// go over each event
		while ( $e = $v->getComponent( 'vevent' ) ) {
			// Event data array.
			$data = array();

			// =====================
			// = Start & end times =
			// =====================
			$start = $e->getProperty( 'dtstart', 1, true );
			$end   = $e->getProperty( 'dtend', 1, true );
			// For cases where a "VEVENT" calendar component
			// specifies a "DTSTART" property with a DATE value type but no
			// "DTEND" nor "DURATION" property, the event's duration is taken to
			// be one day.  For cases where a "VEVENT" calendar component
			// specifies a "DTSTART" property with a DATE-TIME value type but no
			// "DTEND" property, the event ends on the same calendar date and
			// time of day specified by the "DTSTART" property.
			if ( empty( $end ) )  {
				// #1 if duration is present, assign it to end time
				$end = $e->getProperty( 'duration', 1, true, true );
				if ( empty( $end ) ) {
					// #2 if only DATE value is set for start, set duration to 1 day
					if ( ! isset( $start['value']['hour'] ) ) {
						$end = array(
							'year'  => $start['value']['year'],
							'month' => $start['value']['month'],
							'day'   => $start['value']['day'] + 1,
							'hour'  => 0,
							'min'   => 0,
							'sec'   => 0,
							'tz'    => $start['value']['tz']
						);
					} else {
						// #3 set end date to start time
						$end = $start;
					}
				}
			}

			// Event is all-day if no time components are defined
			$allday = ! isset( $start['value']['hour'] );
			// Also check the proprietary MS all-day field.
			$ms_allday = $e->getProperty( 'X-MICROSOFT-CDO-ALLDAYEVENT' );
			if ( ! empty( $ms_allday ) && $ms_allday[1] == 'TRUE' ) {
				$allday = true;
			}

			// convert times to GMT UNIX timestamps
			$start = $this->time_array_to_timestamp( $start, $timezone );
			$end   = $this->time_array_to_timestamp( $end, $timezone );

			if ( false === $start || false === $end ) {
				trigger_error(
					'Failed to parse one or more dates given timezone "' .
					var_export( $timezone, true ) . '".',
					E_USER_WARNING
				);
				continue;
			}

			// If all-day, and start and end times are equal, then this event has
			// invalid end time (happens sometimes with poorly implemented iCalendar
			// exports, such as in The Event Calendar), so set end time to 1 day
			// after start time.
			if ( $allday && $start === $end ) {
				$end += 24 * 60 * 60;
			}

			// Due to potential time zone differences (WP time zone vs. feed time
			// zone), must set all-day event start/end dates to midnight of the
			// respective days, in the *local* time zone.
			if ( $allday ) {
				$start = $ai1ec_events_helper->gmgetdate( $start );
				$start = gmmktime( 0, 0, 0, $start['mon'], $start['mday'], $start['year'] );
				$start = $ai1ec_events_helper->local_to_gmt( $start );
				$end = $ai1ec_events_helper->gmgetdate( $end );
				$end = gmmktime( 0, 0, 0, $end['mon'], $end['mday'], $end['year'] );
				$end = $ai1ec_events_helper->local_to_gmt( $end );
			}

			$data += compact( 'start', 'end', 'allday' );

			// =======================================
			// = Recurrence rules & recurrence dates =
			// =======================================
			if ( $rrule = $e->createRrule() )
				$rrule = trim( end( explode( ':', $rrule ) ) );
			if ( $exrule = $e->createExrule() )
				$exrule = trim( end( explode( ':', $exrule ) ) );
			if ( $rdate = $e->createRdate() )
				$rdate = trim( end( explode( ':', $rdate ) ) );

			// ===================
			// = Exception dates =
			// ===================
			$exdate_array = array();
			if ( $exdates = $e->createExdate() ){
				// We may have two formats:
				// one exdate with many dates ot more EXDATE rules
				$exdates = explode( "EXDATE", $exdates );
				foreach ( $exdates as $exd ) {
					if ( empty( $exd ) ) {
						continue;
					}
					$exdate_array[] = trim( end( explode( ':', $exd ) ) );
				}
			}
			// This is the local string.
			$exdate_loc = implode( ',', $exdate_array );
			$gmt_exdates = array();
			// Now we convert the string to gmt. I must do it here
			// because EXDATE:date1,date2,date3 must be parsed
			if( ! empty( $exdate_loc ) ) {
				foreach ( explode( ',', $exdate_loc ) as $date ) {
					// If the date is > 8 char that's a datetime, we just want the
					// date part for the exclusion rules
					if ( strlen( $date ) > 8 ) {
						$date = substr( $date, 0, 8 );
					}
					$gmt_exdates[] = $ai1ec_events_helper->exception_dates_to_gmt( $date );
				}
			}
			$exdate = implode( ',', $gmt_exdates );

			// ========================
			// = Latitude & longitude =
			// ========================
			$latitude = $longitude = NULL;
			$geo_tag  = $e->getProperty( 'geo' );
			if ( is_array( $geo_tag ) ) {
				if (
					isset( $geo_tag['latitude'] ) &&
					isset( $geo_tag['longitude'] )
				) {
					$latitude  = (float)$geo_tag['latitude'];
					$longitude = (float)$geo_tag['longitude'];
				}
			} else if ( ! empty( $geo_tag ) && false !== strpos( $geo_tag, ';' ) ) {
				list( $latitude, $longitude ) = explode( ';', $geo_tag, 2 );
				$latitude  = (float)$latitude;
				$longitude = (float)$longitude;
			}
			unset( $geo_tag );
			if ( NULL !== $latitude ) {
				$data += compact( 'latitude', 'longitude' );
			}

			// ===================
			// = Venue & address =
			// ===================
			$address = $venue = '';
			$location = $e->getProperty( 'location' );
			$matches = array();
			// This regexp matches a venue / address in the format
			// "venue @ address" or "venue - address".
			preg_match( '/\s*(.*\S)\s+[\-@]\s+(.*)\s*/', $location, $matches );
			// if there is no match, it's not a combined venue + address
			if ( empty( $matches ) ) {
				// if there is a comma, probably it's an address
				if ( false === strpos( $location, ',' ) ) {
					$venue = $location;
				} else {
					$address = $location;
				}
			} else {
				$venue = isset( $matches[1] ) ? $matches[1] : '';
				$address = isset( $matches[2] ) ? $matches[2] : '';
			}

			// =====================================================
			// = Set show map status based on presence of location =
			// =====================================================
			if (
				1 === $do_show_map &&
				NULL === $latitude &&
				empty( $address )
			) {
				$do_show_map = 0;
			}

			// ==================
			// = Cost & tickets =
			// ==================
			$cost       = $e->getProperty( 'X-COST' );
			$cost       = $cost ? $cost[1] : '';
			$ticket_url = $e->getProperty( 'X-TICKETS-URL' );
			$ticket_url = $ticket_url ? $ticket_url[1] : '';

			// ===============================
			// = Contact name, phone, e-mail =
			// ===============================
			$organizer = $e->getProperty( 'organizer' );
			$contact = $e->getProperty( 'contact' );
			$elements = explode( ';', $contact, 4 );
			foreach ( $elements as $el ) {
				$el = trim( $el );
				// Detect e-mail address.
				if ( false !== strpos( $el, '@' ) ) {
					$data['contact_email'] = $el;
				}
				// Detect URL.
				elseif ( false !== strpos( $el, '://' ) ) {
					$data['contact_url']   = $el;
				}
				// Detect phone number.
				elseif ( preg_match( '/\d/', $el ) ) {
					$data['contact_phone'] = $el;
				}
				// Default to name.
				else {
					$data['contact_name']  = $el;
				}
			}
			if ( ! $data['contact_name'] ) {
				// If no contact name, default to organizer property.
				$data['contact_name']    = $organizer;
			}

			// Store yet-unsaved values to the $data array.
			$data += array(
				'recurrence_rules'  => $rrule,
				'exception_rules'   => $exrule,
				'recurrence_dates'  => $rdate,
				'exception_dates'   => $exdate,
				'venue'             => $venue,
				'address'           => $address,
				'cost'              => $cost,
				'ticket_url'        => $ticket_url,
				'show_map'          => $do_show_map,
				'ical_feed_url'     => $feed->feed_url,
				'ical_source_url'   => $e->getProperty( 'url' ),
				'ical_organizer'    => $organizer,
				'ical_contact'      => $contact,
				'ical_uid'          => $e->getProperty( 'uid' ),
				'categories'        => $feed->feed_category,
				'tags'              => $feed->feed_tags,
				'feed'              => $feed,
				'post'              => array(
					'post_status'       => 'publish',
					'comment_status'    => $comment_status,
					'post_type'         => AI1EC_POST_TYPE,
					'post_author'       => 1,
					'post_title'        => $e->getProperty( 'summary' ),
					'post_content'      => stripslashes(
						str_replace(
							'\n',
							"\n",
							$e->getProperty( 'description' )
						)
					),
				),
			);

			// Create event object.
			$event = new Ai1ec_Event( $data );

			// TODO: when singular events change their times in an ICS feed from one
			// import to another, the matching_event_id is null, which is wrong. We
			// want to match that event that previously had a different time.
			// However, we also want the function to NOT return a matching event in
			// the case of recurring events, and different events with different
			// RECURRENCE-IDs... ponder how to solve this.. may require saving the
			// RECURRENCE-ID as another field in the database.
			$matching_event_id = $ai1ec_events_helper->get_matching_event_id(
				$event->ical_uid,
				$event->ical_feed_url,
				$event->start,
				! empty( $event->recurrence_rules )
			);

			if( is_null( $matching_event_id ) ) {
				// =================================================
				// = Event was not found, so store it and the post =
				// =================================================
				$event->save();
			}
			else {
				// ======================================================
				// = Event was found, let's store the new event details =
				// ======================================================

				// Update the post
				$post               = get_post( $matching_event_id );
				$post->post_title   = $event->post->post_title;
				$post->post_content = $event->post->post_content;
				wp_update_post( $post );

				// Update the event
				$event->post_id = $matching_event_id;
				$event->post    = $post;
				$event->save( true );

				// Delete event's cache
				$ai1ec_events_helper->delete_event_cache( $matching_event_id );
			}

			// Regenerate event's cache
			$ai1ec_events_helper->cache_event( $event );

			$count++;
		}
		return $count;
	}
}
// END class
