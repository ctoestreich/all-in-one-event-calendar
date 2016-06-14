<?php

/**
 * Define global functions
 *
 * @author     Time.ly Network Inc.
 * @since      2.0
 *
 * @package    AI1EC
 * @subpackage AI1EC.Lib
 */

/**
 * Always return false for action/filter hooks
 *
 * @return boolean
 */
function ai1ec_return_false() {
	return false;
}

/**
 * Executed after initialization of Front Controller.
 *
 * @return void
 */
function ai1ec_start() {
	ob_start();
}

/**
 * Executed before script shutdown, when WP core objects are present.
 *
 * @return void
 */
function ai1ec_stop() {
	if ( ob_get_level() ) {
		echo ob_get_clean();
	}
}

/**
 * Create `<pre>` wrapped variable dump.
 *
 * @param mixed $var Arbitrary value to dump.
 *
 * @return void
 */
function ai1ec_dump( $var ) {
	if ( ! defined( 'AI1EC_DEBUG' ) || ! AI1EC_DEBUG ) {
		return null;
	}
	echo '<pre>';
	var_dump( $var );
	echo '</pre>';
	exit( 0 );
}

/**
 * Indicate deprecated function.
 *
 * @param string $function Name of called function.
 *
 * @return void
 */
function ai1ec_deprecated( $function ) {
	trigger_error(
		'Function \'' . $function . '\' is deprecated.',
		E_USER_WARNING
	);
}

/* (non-PHPdoc)
 * @see admin_url()
 */
function ai1ec_admin_url( $path = '', $scheme = 'admin' ) {
	if ( ai1ec_is_ssl_forced() ) {
		$scheme = 'https';
	}
	return admin_url( $path, $scheme );
}

/* (non-PHPdoc)
 * @see get_admin_url()
 */
function ai1ec_get_admin_url( $blog_id = null, $path = '', $scheme = 'admin' ) {
	if ( ai1ec_is_ssl_forced() ) {
		$scheme = 'https';
	}
	return get_admin_url( $blog_id, $path, $scheme );
}

/* (non-PHPdoc)
 * @see get_site_url()
 */
function ai1ec_get_site_url( $blog_id = null, $path = '', $scheme = null ) {
	if ( ai1ec_is_ssl_forced() ) {
		$scheme = 'https';
	}
	return get_site_url( $blog_id, $path, $scheme );
}

/* (non-PHPdoc)
 * @see site_url()
 */
function ai1ec_site_url( $path = '', $scheme = null ) {
	if ( ai1ec_is_ssl_forced() ) {
		$scheme = 'https';
	}
	return site_url( $path, $scheme );
}

/* (non-PHPdoc)
 * @see network_admin_url()
 */
function ai1ec_network_admin_url( $path = '', $scheme = 'admin' ) {
	if ( ai1ec_is_ssl_forced() ) {
		$scheme = 'https';
	}
	return network_admin_url( $path, $scheme );
}

/**
 * Returns whether SSL URLs are forced or not.
 *
 * @return bool Result.
 */
function ai1ec_is_ssl_forced() {
	return (
		is_admin() &&
		(
			class_exists( 'WordPressHTTPS' ) ||
			(
				defined( 'FORCE_SSL_ADMIN' ) &&
				true === FORCE_SSL_ADMIN
			)
		)
	);
}

/**
 * Check if an string is empty. 
 * @return bool result
 */
function ai1ec_is_blank( $value ) {
	if ( null === $value || false === isset( $value ) ) {
		return true;
	} else {
	 	if ( is_string( $value ) ) {
	 		return strlen( trim( $value ) ) <= 0;		
	 	} else if ( is_array( $value ) ) {
	 		return count( $value ) <= 0;
	 	} else {
	 		return false;
	 	}		
	}
}

/*
 * Date parser for PHP <= 5.2
 *
 * Source: http://stackoverflow.com/questions/6668223/php-date-parse-from-format-alternative-in-php-5-2
 *
 * Modified to always populate hour, minute and second.
 *
 */
if ( ! function_exists( 'date_parse_from_format' ) ) {
	function date_parse_from_format( $format, $date ) {
		// reverse engineer date formats
		$keys = array(
			'Y' => array( 'year',   '\d{4}' ),
			'y' => array( 'year',   '\d{2}' ),
			'm' => array( 'month',  '\d{2}' ),
			'n' => array( 'month',  '\d{1,2}' ),
			'M' => array( 'month',  '[A-Z][a-z]{3}' ),
			'F' => array( 'month',  '[A-Z][a-z]{2,8}' ),
			'd' => array( 'day',    '\d{2}' ),
			'j' => array( 'day',    '\d{1,2}' ),
			'D' => array( 'day',    '[A-Z][a-z]{2}' ),
			'l' => array( 'day',    '[A-Z][a-z]{6,9}' ),
			'u' => array( 'hour',   '\d{1,6}' ),
			'h' => array( 'hour',   '\d{2}' ),
			'H' => array( 'hour',   '\d{2}' ),
			'g' => array( 'hour',   '\d{1,2}' ),
			'G' => array( 'hour',   '\d{1,2}' ),
			'i' => array( 'minute', '\d{2}' ),
			's' => array( 'second', '\d{2}' )
		);

		// convert format string to regex
		$regex = '';
		$chars = str_split( $format );
		foreach ( $chars AS $n => $char ) {
			$lastChar = isset( $chars[$n - 1] ) ? $chars[$n - 1] : '';
			$skipCurrent = '\\' == $lastChar;
			if ( !$skipCurrent && isset( $keys[$char] ) ) {
				$regex .= '(?P<' . $keys[$char][0] . '>' . $keys[$char][1] . ')';
			} else if ( '\\' == $char ) {
				$regex .= $char;
			} else {
				$regex .= preg_quote( $char );
			}
		}

		$dt = array();
		// now try to match it
		if ( preg_match( '#^' . $regex . '$#', $date, $dt ) ) {
			foreach ( $dt AS $k => $v ) {
				if ( is_int( $k ) ) {
					unset( $dt[$k] );
				}
			}
			if ( ! checkdate( $dt['month'], $dt['day'], $dt['year'] ) ) {
				$dt['error_count'] = 1;
			} else {
				$dt['error_count'] = 0;
			}
			if ( ! isset( $dt['hour'] ) ) {
				$dt['hour'] = 0;
			}
			if ( ! isset( $dt['minute'] ) ) {
				$dt['minute'] = 0;
			}
			if ( ! isset( $dt['second'] ) ) {
				$dt['second'] = 0;
			}
		} else {
			$dt['error_count'] = 1;
		}
		$dt['errors']        = array();
		$dt['fraction']      = '';
		$dt['warning_count'] = 0;
		$dt['warnings']      = array();
		$dt['is_localtime']  = 0;
		$dt['zone_type']     = 0;
		$dt['zone']          = 0;
		$dt['is_dst']        = '';

		return $dt;
	}
}
