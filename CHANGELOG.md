## Changelog

= Version 2.5.0 = 

* Changed: ICS feeds are now handled through API
* Added support for Timely Ticketing to the tickets button
* Fixed: Error was popping up when clicking on "Your Saved Events" button 
* Fixed: Tickets button were appearing twice on Month view popup
* Fixed: A few users were getting error while trying to upgrade plugin

= Version 2.4.1 = 

* Fixed: Security vulnerability related to stored XSS
* Fixed: Security vulnerability related to not sanitizing correctly some URLs
* Improved: Exhibition of ticket's quantity field, that was too small and no number could be seen

= Version 2.4.0 = 

* Improved: Changed the default number of ticket in the dropdown to 0 on any ticket type, instead of 2.
* Improved: Allowing user to change sender's name from 'WordPress' to their own name (site name) when sending email notification.
* Improved: Allowing user to edit ticket even after sale starts.
* Improved: Allowing user to delete ticket event even after sale starts.
* Improved: Event's custom fields are now exported when using the "Export to XML" opton.
* Improved: Timely Network Sign up was moved to Ticketing beta page.
* Improved: Support all major currencies for ticketing (USD, EUR, CAD, etc).
* Fixed: When "No end time" option was selected and start time was 11:45pm, the event used to show on the next day.
* Fixed: It was not possible to add or change the Venue image.
* Fixed: Event with Timely Tickets was not showing Buy Ticket button when imported on another site.
* Fixed: Recurrent events start/end time of imported events was incorrect for subsequents instances of the event.
* Fixed: Immediately option of Timely Tickets was not being saved.
* Fixed: Venue option of the event used to be exported as a category.
* Fixed: Some items of Add-ons page was using broken urls.

= Version 2.3.12 = 
* Improved: Added "Videos" button in the box support section.
* Improved: Restructured event cost vs ticketing for a better user experience.
* Improved: Edit event page to prevent invalid email for Organizer.
* Improved: Added error notices if required PHP extensions (mbstring and iconv) are missing when the plugin is installed.
* Improved: Performance optimizations for embedded widgets.
* Improved: External widgets snippet code for better compatibility with SSL sites.
* Fixed: Image does not appear in the month view pop-up window.
* Fixed: Ticketing Beta - Every ticket type dropdown defaults to 1 instead of the actual minimum.
* Fixed: Ticketing Beta - Ticket Types got misaligned when one ticket is closed.
* If you want to see the release notes for Add-ons, then please visit [this page](http://time.ly/document/release-notes).

= Version 2.3.11 =
* New: Now the calendar is set up automatically when you install the plug-in for the first time
* New: Now you can export the calendar to XML format
* New: Extended Views - User can now select 1 out of the 3 available posterboard views (Tile, Grid and Bulletin)
* Fixed: "View details" link in the plugin's page was leading to a blank page
* Fixed: Deselecting preselected filters wasn't loading correct views
* Fixed: The link in Advanced Settings about the GZIP compression issue was wrong
* Fixed: Event recurrence: "Custom Repeat" preselected days would be off 1 day on some timezones
* Fixed: Export to Google Calendar was exporting wrong content
* Fixed: Ticketing Beta - User could not update the status of a ticket type if there were sold tickets for it
* Fixed: Ticketing Beta - Block users from creating tickets for a recurrent event
* Updated: The admin dashboard links on the right side in the Settings page
* Updated: Increased the "Medium size" for the images of imported events from 300px to 600px

= Version 2.3.10 =
* Initial ticketing implementation - If you want to be a Beta user for this exciting new feature, then please visit [this page](https://time.ly/ticketing_beta).

= Version 2.3.9 =
* Improved JS caching stability in different environments
* Improved automatically detection of line ending style and fixed CSV import issues for files created in Mac OS X
* Improved the alert displaying an error (often a "Syntax error") with the details of the wrong response received from server
* Fixed the text in the "Venue location" - correct symbols instead of HTML
* Fixed cloning events with Duplicate Post plugin conflicts are resolved
* Fixed: "Shortcodes" Calendars now work correctly
* Fixed: Empty Calendar view caused by a MySQL error in the server log
* Fixed: The last version was showing the event as "free event" unless you enter a ticket url
* Fixed: "Cost" and "External Tickets URL" fields are no longer required for paid events
* Fixed: Featured images appears on the Event details popup

= Version 2.3.8 =
* Improved loading speed of Calendar views by caching
* Improved loading speed of SuperWidget and other external widgets
* Improved loading speed by enabling Front-end Rendering by default
* Fixed: Plugin does not clean up DB after being uninstalled
* Fixed: Translations are not working anymore for all words
* Fixed: Feed import feature does not import for Repeat custom dates
* Tweak: Included translations in the plugin, thanks to @netaction for pointing this

= Version 2.3.7 =
* Fixes DB update issue on some sites. Reverted changes made on version 2.3.5 related to the ICS Feed URL column type.

= Version 2.3.6 =
* Fixed compatibility with PHP 5.2

= Version 2.3.5 =
* Fixed compatibility with WordPress 4.4
* Event location details Google maps pin marks the wrong place
* When an event with ticket option is exported to an ICS feed, the description will include the "Buy ticket URL" (if filled)
* Fixed ICS import issue

= Version 2.3.4 =
* Fixed ICS import issue

= Version 2.3.3 =
* Fixed bug with month view navigation

= Version 2.3.2 =
* Confirmed compatibility with WordPress 4.3

= Version 2.3.1 =
* Fixing piece of code that was incompatible with PHP versions prior
to 5.3 while we strive to provide good experience to all WordPress
users

= Version 2.3.0 =
* Some custom recurrence rules (having multiple definitions) weren't
correctly processed
* Sometimes links to other dates weren't showing on Agenda view
* Edits to a recurring event would fail to save
* Settings page would fail to load in rare circumstances
* Updates were failing with some PHP versions
* Dates would not change when navigating back in time
* Make sure event preview is not showing unreadable characters (HTML)
* Tag and Category names can now contain apostrophe
* Remove code related to inclusion in Time.ly Network of calendars (was
working only if user opted-in)
* Deleting an event instance before saving no longer affects the main
recurring event
* Event Contributor role now can edit events
* Editing custom recurrence dates now displays them in the date picker
* Made it easier to detect and interact with events rendering using
JavaScript
* Rendering proper page while calendar is not fully configured
* Made it possible for 3rd party developers to add buttons to event
details page .ics feeds can now be edited. 
* Made it possible for 3rd party developers to add elements to ICS feeds
import screen
* Made it possible to filter by author
* Calendar should load a bit faster due to different JavaScript
placement
* Allowed Newsletters to include events occuring far in the future

= Version 2.2.1 =
* Fixed ICS issue where old events were imported when option was not
checked
* Fixed issue where the map covered other fields when creating a new
event
* Fixed an issue where events occuring on the last day of a month would
appear on the first of the month
* Posterboad will now show the event time in the local timezone
* Removed browser request to share user's location details

= Version 2.2.0 =
* Implemented frontend renderring for improved performance
* Implemented Google’s new NoCaptcha, a better way of detecting spam
bots
* Allow users to create recurring events with no pattern by clicking
dates in the calendar
* Created a new menu item “Organize” that contains Categories, Tags,
Venues, and Filter Groups
* New plugin that allows filter search by keyword for Hubs
* Added the ability to select colours for terms of Filter Groups
* Added the ability to map imported taxonomy to existing Filter Group
terms
* Exposed Filter Groups on the Frontend Event Submission form
* Improved JavaScript components loading speed
* Created a workaround option for dealing with a bug in Google’s
handling of timezones on .ics feeds
* Optimized cache usage: regenerating files only when a change
justifies it
* Categories/tags information is updated during Feeds import
* The subscribe to calendar button now drops up, reducing theme
conflicts
* Made it possible to easily introduce template modifications
* Improved display of event dates to ensure year will show
* Improved URLs handling when WordPress is upgraded to use SSL
addresses
* Made it possible to have Powered by Time.ly logo on a calendar
* Improved tooltip behaviour and removed them from mobile
* Clarified the option to import past events
* Persistent notices now contain easily accessible information helping
determine the cause and resolution for the message
* Improved calendar embedding options by making it more compatible
with different platforms
* Improved menu labels for Frontend Event Submissions
* Made it possible to modify values that are passed to templates
* Made it possible to filter upcoming events widget by more values
* Clarified where it is appropriate to use JavaScript widgets vs
WordPress widgets or shortcodes
* Improved database queries performance (affects large deployments)
* Improved add-on dependency message
* Fixed issue where it was impossible to remove a color from a
category
* Fixed issue where calendar navigation stopped responding
* Fixed issue where on some servers JavaScript was not fully rendered
* Improved CSS handling so that it would not be recompiled unless
necessary
* Improved compatibility with iCalendar applications by removing end
time from events that have none
* Made it possible to set an end time on events that were previously
set to no end time
* Fixed an issue where settings translation was not updatable
* Fixed issue where the “now” marker in week and day view was missing
* Fixed a conflict with the views dropdown and the subscribe button
* Fixed issue where multi-day events were displayed incorrectly in day
view
* Fixed a conflict where WPML and a static calendar homepage resulted
in a 404
* Fixed recurring events import: detecting modifications with greater
accuracy
* Temporary disabled microformatting to avoid conflicts with 3rd party
plugins
* Fixed an issue where the licence key menu is not available if the
add-on has no settings
* Next/Prev navigation is present again at the bottom of the calendar
* Fixed an issue with date parsing in PHP version 5.2.4
* Fixed an issue where “back to calendar” and “buy tickets” buttons
were missing
* Fixed an issue where featured image was not visible on the event
details page
* Fixed a plugin conflict with the popular “Gallery” plugin
* Fixed an issue where event footers were not being rendered
* In some cases, if browser identifier is unavailable, invalid
JavaScript markup was being produced
* Make sure timezone setting is respect whenever it’s made in site, or
calendar settings
* In case of rendering error user will be presented with a friendly
message and calendar will try to re-configure
* Fixed an issue where LESS would fail to compile on install
* Fixed error which was appearing when choosing calendar viewable
hours which do not pass validation
* Editing event imported from Feed doesn’t break it’s relationship
with feed
* Fixed issue where custom permalinks resulted in a 404
* Fixed issue where shortcodes used on the calendar page conflicted
with Agenda View
* When importing events from some calendars meta fields contained
unreadable data
* Fixed issue where “no end time” could not be unchecked
* Fixed an issue where the Google map preview was obscuring the
address fields
* Fixed an issue where the “Post your Event” and “Add your Feed”
buttons were not visible on shortcode calendars
* Event detail pages will now always open in a modal from calendars
embedded using the SuperWidget
* Resolved conflict with the Form Maker plugin
* Fixed an issue where an unauthorized user could access the clone
event feature

= Version 2.1.9 =
* Improved calendar feeds import from Google calendar
* Made calendar behaviour across browsers more consistent – fixed issue
where some of the elements remained inactive after loading
* Improved cache handling to allow easier development of child calendar
themes
* Improved memory handling – some heavy tasks are delayed or not
performed
* Improved legacy theme detection
* Improved notifications mechanism to make informational notices clearly
distinguishable
* Improved SuperWidget navigation by handling more operations without
resorting to rendering in base calendar context
* Fixed event limit handling in shortcode – now number of events
indicated when creating the shortcode is respected
* Removed unwanted URLs from print view
* Fixed multi day events display in Month view
* Fixed word-wrapping rendering in month view – got rid of unwanted
rendering artefacts
* Fixed timezone handling on calendar views – unknown timezones are now
treated as default calendar timezone

= Version 2.1.8 =
* Fixed issue where core themes were sometimes incorrectly treated as
legacy ones
* Fixed issue where some elements in child themes weren't correctly
rendered
* Fixed issue where event details link was being malformed in some
cases
* Improved compatibility with some 3rd party themes

= Version 2.1.7 =
* Fixed issue where a stopping error may have been encountered when
3rd party plugins do not properly use include_once family functions
* Fixed issue where address autocomplete wasn't properly disabled
* Fixed issue where clicking "Back to calendar" was redirecting to
default calendar when a site had more than one calendar embedded via
shortcode
* Fixed issue where on some browsers and operating systems extra
characters were being rendered on screen
* Fixed issue where some 3rd party plugins were injecting non-readable
data into the event excerpt view
* Fixed issue where all-day view was not rendering correctly at all
times
* Improved print-view to use compact agenda view

= Version 2.1.6 =
* If an event's timezone is different from the site's it will now be
displayed on the event details page
* Improved calendar view customization by allowing selection of fonts
* Made CSS cached filename unique on every theme save to improve caching
compatibility
* Improved AJAX failure handling
* Improved button layout on HTML4 sites
* Improved the UI of the filter bar when empty
* Improved CSS rendering in widgets, to avoid conflicts
* Improved performance by re-compiling CSS afer changes require it
* Made it possible to use area between filter bar and main calendar as a
widget area with certain themes
* Prevent potential issues with incompatible add-on versions by checking
them during activation
* Showing add-ons available for All-in-One Event Calendar in a
dedicated page
* Fixed issue with unescaped HTML in the widget title 
* Fixed wording - using proper WordPress name wherever applicable 
* Fixed issue with double-escaped HTML in Agenda view (strange
characters in titles) 
* Fixed invalid constant use which was causing some strings to be not
translatable 
* Fixed event title rendering in a widget 
* Fixed span class appearing on all day events in the sidebar widget 
* Fixed imported all day events appearing a month ahead in Month View 
* Fixed an issue where base64 fonts caused errors with older versions of
PHP 
* Fixed an issue with ics feeds importing past events 
* Fixed an issue where theme options need to be resaved after update 
* Fixed an issue where font awesome icons were missing in Firefox 
* Fixed a conflict with sortcodes and front end rendering 
* Fixed an issue where an event missing a timezone caused a fatal error 
* Fixed a styling issue with Select2 fields on the settings page 
* Fixed an issue where the post your event button did not display on a
calendar set with shortcode 
* Fixed an issue where some calendars displayed extra space below
Posterboard 
* Fixed an issue where certain feeds would create double images 
* Fixed a navigation issue with a calendar embedded by shortcode 
* Fixed issue where Agenda View displaed multiple images 
* Fixed an issue where clicking a link in js widgets did not open the
modal 
* Fixed issue where clearing filters changed spacing 
* Fixed issue where clearing filters reset the calendar to default view 
* Fixed issue where in some cases views would not change 
* Fixed issue where featured images were missing from Streamview in
Firefox 
* Fixed issue where the timezone of events imported from Google was set
to UTC

= Version 2.1.5 =
* Confirmed compatibility with WordPress 4.0 and added new Timely icon

= Version 2.1.4 =
* Improved context awareness of cache clean-up function to protect
from accidentally removing files that do not belong to the plugin

= Version 2.1.3 =
* Added possibility to keep old events during ICS feeds update
* Made subscribe dropdown button mobile friendly
* Implemented microformats 2 improving SEO and reducing theme and plugin
conflicts
* Improved compatibility with JetPack - sharing elements no longer
appear on empty pop-over elements
* Enabled translation of some previously untranslatable strings
* Made it possible to translate view names
* Fixed ICS import which was failing due to unrecognized timezones for
excluded dates
* Fixed pagination in Agenda view
* Fixed `the_title` filter to only add hEvent class names to our post
titles
* Improved cache behavior - no longer stressing when write to file cache
fails
* Improved cache fall-back to database when faster means are unavailable
* Fixed potential error which could have prevented settings from being
saved on some systems
* Fixed JetPack compatibility
* Fixed widget pop-up which was displaying event sharing information in
some cases

= Version 2.1.2 =
* Fixed issue where settings weren't saving in some cases
* Fixed issue where permalinks for events weren't working until "save"
  was clicked in permalinks settings page
* Fixed issue where excluded dates from ICS feeds weren't correctly
  imported

= Version 2.1.1 =
* Added ability to select mobile specific default views
* Improved filter bar layout for mobile rendering
* Improved CSS load times by using cached CSS file when possible
* Changed single event alias from /ai1ec_event to /event
* Allow multiple calendars on a single page
* Allow developers to modify values before they are passed to templates
* Improved CSS compiling decreasing page load times
* When file cache is not available CSS is stored in database and output in
  <style> tag directly for  increased performance and to mitigate potential
  security risks
* Introduced use of microformats for improved SEO
* Improved error handling on ICS feeds page (more extensive reporting,
  clear message on allowed URL formats)
* Improved exclude dates selector widget and exclude dates overview in
  Dashboard
* Improved information displayed when links for tags/categories are
  clicked
* Removed duplication of Publish button
* Allow the filter menu to be affixed to the window
* Allow time zone selection during event creation
* Improved display of robots.txt field in Settings as well as
  robots.txt handling
* Fixed import/export of events with no end time or date
* Fixed todays date marking in Agenda-like views
* Fixed expand map link
* Removed urls from print view
* Restored address autocomplete region biasing function
* Fixed fatal error preventing CSS compilation
* Fixed section 508 compatibility
* Improved security by preventing XSRF on forms and links where
  applicable

= Version 2.0.13 =
* Fixed week view where events spanning multiple days were incorrectly
rendered;
* Changed default single event URI to `/event` and make it possible to
translate them (translation string - 'event')
* Updated screenshots for base themes;
* Fixed month view popup location;

= Version 2.0.12 =
* Fixed ICS import issue where feed meta information was duplicated
across feeds;
* Restored timezones selector to Settings page (visible when none is
chosen);
* Improved compatibility with 3rd party themes (Compasso);
* Improved contact information import/export via ICS feeds;
* Improved CSS files generation to reduce use of `!important`
declaration on custom rules;
* Restored filters `active` state (displaying tags/categories filters
as active when selected);

= Version 2.0.11 =
* Fixed issue where incorrectly recognized unique identifiers (UIDs)
from ICS feeds caused the creation of duplicate events.

= Version 2.0.10 =
* Improved "Subscribe" to calendar button;
* Modified subscription options, removing some elements from content
when subscribing in products that do not support rich formatting;
* Restored option to choose week/day view start/end times;
* Restored borders to Agenda View;
* Moved translations from Twig files to ensure GlotPress captures all
translation strings;
* Fixed issue where past dates (like 1922-05-05) selected in the
frontend form datepicker caused Core to deactivate;
* Fixed issue where older versions of WordPress did not show all Event
menu items (add/edit);
* Improved UID usage - events are now first recognized by UID thus
avoiding overwriting of events previously imported from some feed;
* Fixed issue where ICS import was failing on systems where use of
undeclared variable caused processing to stop;
* During update unused legacy themes will now be removed where
possible;

= Version 2.0.9 =
* Improved plugin performance by reducing the number of database
queries made during average front-end page load by at least 30%
(optimized WordPress data retrieval patterns);
* Fixed issue where special characters (like quotes) were escaped when
used in Settings;
* Fixed issue where monthly view popover displayed time one minute
early;
* Improved CSS loading performance by making option auto-loadable;
* Fixed issue where folder conflict (vendor/{Twig,twig}) was causing
problems on some systems;
* Fixed issue where using a manual timezone caused a conflict when
navigating to particular date;
* Fixed issue where all events were displaying as the same duration on
a Single Day View and Week View;
* Fixed issue where it was impossible to deactivate multiple plugins;
* Fixed issue where an error was raised when no cache providers where
available on some systems;
* Fixed issue where Upload image button in Front End Events form was
unresponsive;
* Fixed issue where CSS files were not properly included on some
systems;
* Fixed compatibility with WPML;
* Fixed issue where ICS feeds were not automatically updating at the
set intervals;
* Fixed instructions for child themes creation found in Gamma theme
files;
* Fixed issue where some servers mistakenly reported cache directory
as writable causing the plugin to be disabled;
* Restored notification to finish plugin configuration after
installation;
* Fixed issue where datepicker on the frontend was rendered
incorrectly with some themes;

= Version 2.0.8 =
* Fixed issue where it was impossible to edit some of the events;
* Fixed issue where it was impossible to trash custom post types in
some cases;
* Fixed issue where it was impossible to edit some recurrent events;

= Version 2.0.7 =
* Restored option to disable GZIP compression;
* Fixed issue where it was impossible to clear default tags/categories
selection;
* Fixed issue where Agenda widget wasn't displaying start time;
* Fixed issue where tags/categories were incorrectly processed for ICS
exported events;
* Fixed issue where comments weren't properly disabled on imported ICS
feeds;
* Fixed issue where database upgrade was failing when some database
tables were empty;
* Fixed issue where exclude dates were not correctly exported for
Google Calendar;
* Fixed issue where timezones weren't properly converted for some old
events;
* Fixed issue where shortcode for a day view was incorrectly defined;
* Fixed issue where HTML characters appeared in categories/tags names;
* Fixed issue where it was impossible to edit single event instance
(entire set was edited instead);
* Fixed calendar navigation when page slug has UTF-8 values
(non-English characters) in it;
* Fixed issue where category colour wasn't properly displayed in all
calendar views;
* Fixed issue where Postbox elements open/close functionality was
broken;
* Adjusted http://time.ly information panel in Settings page;

= Version 2.0.6 =
* Initial public release of 2.0 on http://WordPress.org repository;
* Restored ability to remove Category image;
* Fixed licence keys activation;
* Fixed issue where All-in-One Event Calendar JavaScript wasn't
loading in some configurations;
* Improved event page layout;
* Fixed issue where Upcoming Events widget wasn't properly wrapped;
* Fixed issue where migrating from versions prior to 1.10 caused
events date time to have offset added in some cases;
* Fixed issue where manual offset times were not recognized;
* Fixed issue where upgrading was causing fatal errors in some cases;
* Fixed issue where templates cache directory problems were not
properly diagnosed.

= Version 2.0.5 =
* Restored translation files;
* Restored filtering by tags/categories in All Events page;
* Fixed issue where feeds weren’t exporting in some cases;
* Fixed issue where “Buy Tickets” button was directing to invalid URL
in some cases;
* Fixed Add to Google Calendar link;
* Fixed issue where widget was causing plugin to be disabled in some
cases;
* Modified themes rendering by giving child themes higher priority;
* Fixed issue where some links were invalid when pretty permalinks
were disabled;
* Fixed issue where Show year option wasn’t working.

= Version 2.0.4 =
* Introduced support for legacy themes (requires add-on for full
operation).

= Version 2.0.3 =
* Improved database structure conversion handling.

= Version 2.0.2 =
* Updated vendor libraries.

= Version 2.0.1 =
* Made plugin modular, allowing users to install extensions for
required features;
* Improved performance by delaying resources initialization until
needed;
* Implemented new theme layer using Twig
(http://twig.sensiolabs.org/), which will allow the Calendar to render
new views in JavaScript;
* Created time manipulation layer, which will allow editing of event’s
timezone, and also leverage system ability to track timezone
definition changes when processing, or rendering of time entity comes
into action;
* Timezone information is stored with the event during event creation
and/or import ensuring event is treated with respect to it’s original
timezone;
* Implemented soft-deactivation feature to help prevent fatal errors
which notifies user if an error occurs and makes plugin behave as if
it was deactivated;
* Allowing smooth interoperability with 3rd party cache plugins
primarily by not providing another cache layer which would cripple
behaviour of former ones;
* Added thin compatibility layer which supports up-to date
PHP/WordPress versions and provides support for older releases;
* Created calendar feeds extension layer, which is meant to allow
adding new types of feeds in addition to already existing ICS;
* Created configuration abstraction layer, which is safe to use with
3rd party caching plugins;
* Fixed repeated cron additions, which was causing intensive database
writes in some configurations;
* Extended meta-data management layer to save from unnecessary calls
to underlying database;
* Implemented robust and extensible filtering layer allowing to create
new filter types on demand;
* Improved internationalization support with respect to WordPress and
3rd party plugins behaviour;
* Updated to Bootstrap 3 for better performance and responsiveness;
* Moved Front End Event Submission, Superwidget, Platform Mode,
Posterboard, Stream View, Agenda View, Facebook and Twitter to
extensions. Please view their release notes for details;
* Fixed DST issue causing times to shift one hour;
* Clicking the browser back button returns site visitors to view they
were on;
* Fixed issue where the widget would not display a full day’s events;
* Created new Venues extension allowing user to create and save
venues;
* Fixed publish to Facebook to include event address and image;
* Updated Facebook vendor library;
* New setting to exclude importing private events;
* New setting to exclude importing declined events;
* Added ability to make fields required on Front End Submission form;
* Created short-code to place form on a page;
* Eliminated Posterboard view loading dependency on webfonts;
* Upgraded Masonry for smoother animation effects and better
performance.

= Version 2.0.0 =
* Initial release of modified architecture plugin. See above for
detailed architectural changes.

= Version 1.10.11-standard =
* Modified date and time storage to protect values from potential
changes caused by MySQL.

= Version 1.10.10-standard =
* Fixed an issue where Standard users are asked to update to the Lite
version.
* Collect Standard user's email address to send free licences for new
non core extensions.

= Version 1.10.9-standard =
* Increasing version number from 1.10.1-Standard to 1.10.9-Standard to
work around WordPress behaviour suggesting upgrade to 1.10.4-Lite.

= Version 1.10.1-standard =
* Added "last" option to monthly recurrence patterns
* Modified exported UID to reflect event origin
* Fixed issue where category colour wasn't seen on Event Categories
admin page
* Fixed issue where some names recieved "MAILTO:" prefix when
importing feeds
* Fixed several database handling cases which may have caused plugin
installation failure on some systems
* Improved plugin performance especially when handling larger number
of events
* Modified addressing scheme to use tilde (~) instead of colon (:) for
arguments identification to resolve an issue with some Microsoft IIS
servers
* Fixed issue where events exported to Facebook had backslash added
before certain symbols
* Fixed issue that caused a JavaScript error to app
ear on admin dashboard in some cases
* Added possibility to turn off compression of CSS files
* Fixed issue that prevented "Reveal whole day" button from working
* Fixed several possible vulnerabilities (courtesy for finding goes to
Christian Mehlmauer)
* Fixed issue with WordPress Total Cache plugin that caused server
error
* Fixed issue that prevented removal of assigned category colours

= Version 1.10-standard =
* Made improvements to page rendering times
* Addressed issue with errors occurring on some hosting environments
(__PHP_Incomplete_Class)
* Improved event start/end time display in Posterboard view; "Show
year" setting now also applies to Posterboard view

= Version 1.9.6-standard =
* Fixed issue with plugin update failing due to permissions error
* Fixed issue with admin area menu entries disappearing for
non-administrative users
* Fixed issue with .ics feeds failing to import when some of the
events have no end time
* Fixed issue with Page Not Found (error 404) being experienced on
custom taxonomy archive pages
* Fixed issue with preselected categories/tags filter not working
* Fixed issue with Subscribe link not working on iPad
* Fixed issue with AJAX requests failing when FORCE_SSL_ADMIN constant
is defined
* Fixed issue with apostrophes having prepended backslashes in
Location field
* Fixed issue with source code being shown as plain text in Agenda
view with certain plugins activated
* Improved time zone display in event creation form
* Fixed issues with Roots theme, font loading, and Post Your Event
form category/tag selectors
* Fixed issue with events disappearing from Agenda-like calendar views
before they end
* Fixed issue with all-day events not ending on correct date

= Version 1.9.5-standard =
* Fixed an issue where the time of events, occurring on or after DST
change, has incorrect offset (see
http://help.time.ly/customer/portal/articles/1038017 for more details)
* Fixed an issue where subscribed .ics feeds are being flushed rather
than being refreshed during automatic cron update
* Fixed incorrect formatting of events' end date/times
* Fixed an issue where geographical information import/export via .ics
feeds is causing loss of data

= Version 1.9.4-standard =
* Fixed issue with exported ICS feed containing invalid characters
* Fixed issue with calendar failing to apply filters when embedded via
shortcode
* Addressing issue with database update failing with unclear error
* Fixed issue with referencing non-existent default WordPress roles
* Fixed issue with slash symbols polluting some values
* Fixed issue with all-day events not ending on correct date
* Modified uninstall process to remove plugin-specific options
* Fixed issue with events not being imported on some server
configurations

= Version 1.9.3-standard =
* Fixed issue with .ics file being generated with invalid fields
* Implemented better integration with qTranslate
* Made an improvement to webfont loading
* Fixed issue with URL in CSS containing duplicate full-path
* Improved address handling on some specific server configurations
* Improved .ics import handling of all-day events
* When database upgrade fails, now displays friendly message

= Version 1.9.2-standard =
* Fixed issue with calendar toolbar not updating in shortcode-embedded
calendar
* Renamed "Instantaneous" checkbox to "No end time"
* Added option to skip in_the_loop() check to resolve conflicts with
certain themes (Gonzo, Simplicity, etc.)
* Fixed second URL issue with calendar page sometimes missing trailing
slash

= Version 1.9.1-standard =
* Restored the old front-end Post Your Event button (links to Add New
Event screen in WP dashboard)
* Fixed URL issue with calendar page being a subpage of a parent
* Fixed URL issue with calendar page sometimes missing trailing slash

= Version 1.9-standard =
* Inline Calendar Theme editor
* Edit one instance of a recurring event
* Improved Agenda and Posterboard Event Filtering
* Better URL structure: link to a specific month/day/week
* Revised Calendar UI and better filtering
* Prominently featured event images, and Event Category default image
* RSS event feed
* WPML compatibility
* Setting to select initial category and tag filters
* Instantaneous events: events with start time only
* Limit Upcoming Events widget to # of events
* Better preservation of event location, categories and tags on
import/export
* Performance optimizations
* Ticket Purchase URL field
* Added support for PHP unsupported timezones
* PHP and Javascript refactoring
* Security updates
* Removed ?wp_cron=... from URL
* Import photos from Facebook Events
* Added Website URL field
* UI improvements to administration screens
* Bug fixes, UI enhancements, and more

= Version 1.8.4-premium =
* Added support for WordPress 3.5

= Version 1.8.3-premium =
* Fixed an issue with google maps
* Fixed an sql problem in duplicate controller
* Fixed an upgrade theme issue

= Version 1.8.2-premium =
* Added compatibility when the official Facebook plugin is installed

= Version 1.8.1-premium =
* Added support for WordPress v3.2 - WP_Scripts::get_data method
didn't exist before WP v3.3

= Version 1.8-premium =
* "Posterboard" view option for event display
* Ability to have only certain calendar views enabled
* Refactored Javascript to reduce conflicts with themes and plugins
* Facebook Integration - Import and Export events to Facebook
* Front End UI enhancements
* Updated ical parser

= Version 1.7.1 Premium =
* AIOEC-186 AIOEC-195: Added compatibility for WordPress 3.4
* AIOEC-120: Internet Explorer - admin + frontend UI compatibility
* AIOEC-193: On single events page, the "pm" (or am) appears on the
following line in Skeptical Wootheme
* AIOEC-195: Theme screenshots do not show up in 3.4

= Version 1.7 Premium =
* Restored support for WordPress 3.2.x, which fixes numerous
JavaScript issues in that version of WordPress
* Updated jQuery loading to avoid theme, slider, other issues
* Removed opaque background from calendar containers to better match
WP theme background
* Updated multi-day UI
* Improved UI for latitude / longitude
* un-minified css for easier editing

= Version 1.6.3 Premium =
* Added support for server running versions of php below 5.2.9

= Version 1.6.2 Premium =
* Fixed bug that was breaking adding/importing/editing events
* Enabled updates and update notifications when there is a newer
version

= Version 1.6.1 Premium =
* Fixed bug that was breaking widget management screen
* Removed some warnings from month view in certain setups

= Version 1.6 Premium =
* Choose new Calendar Themes
* Duplicate Events
* Create Print View
* Add location details that allow latitude and longitude for areas
poorly covered by Google Maps
* Turn on/off autocomplete for addresses
* See more intuitive views of multi-day events on weekly and monthly
calendars
* Calendar administration role to allow for dedicated calendar
application
* Security updates
* Bug fixes

= Version 1.5 =
* Added daily view
* Various bug fixes
* Added new translations
* Added support for featured images
* Better support for Multisite Ajax
* Added support for DURATION property in iCalendar specs
* Resolved FORCE_SSL_ADMIN issue

= Version 1.4 =
* Export ICS feeds with utf8 header
* Import/Download ICS feeds with CURL if available, otherwise keep the
current method
* Better UTF8 support for imported events
* Use local version jquery tools instead of the CDN copy
* Improved system for catching errors and trying best to find a
possible route to proceed without having to quit/fail
* Fixed various Notice level errors
* Fixed bug with recurrence/exception rules not properly being
converted to GMT
* Added EXDATE support and EXDATE UI to allow selection of specific
dates.
* Added filter by feed source on All events page
* Improved caching of stored events
* Fixed getOffset problem - notify me if it still happens for you

= Version 1.3 =
* Added shortcodes support. (Howto is under Frequently Asked Questions tab)
* Added support to exclude events using [EXRULE](http://www.kanzaki.com/docs/ical/exrule.html)
* Added Czech translation
* Added Danish translation
* Updated Swedish translation

= Version 1.2.5 =
* Reviewed plugin's security. The plugin is as safe to use as is
WordPress itself.
* Fixed: instance_id not corresponding with correct data
* Fixed: Call-time pass-by-reference warning
* Improvement: Added support for custom fields

= Version 1.2.4 =
* Improvement: Added a lower version of iCalcreator for environments
with PHP versions below 5.3.0

= Version 1.2.3 =
* Improvement: Days of the week in month recurrence
* Improvement: Make Month view, Week view compatible with touchscreen
devices
* Improvement: Improve error handling in get_timezone_offset
function
* Improvement: Update iCalcreator class
* Fixed: Widget Limit options (category, tag, etc) multiselect fails
to display properly
* Fixed: Private Events Show in Calendar and Upcoming
Events.
* Fixed: Dates getting mixed up between Ai1EC calendars
* Fixed: Error displayed when event is a draft
* Fixed: PHP Notice errors from widget

= Version 1.2.2 =
* Fixed: Issue with Week view having an improper width

= Version 1.2.1 =
* Fixed: Exporting single event was exporting the whole calendar
* Fixed: Widget date was off by one in certain cases
* Fixed: Trashed events were still being displayed
* Fixed: All day events were exporting with timezone specific time
ranges
* Fixed: End date was able to be before the start date
* Fixed: 404 or bad ICS URLs now provide a warning message rather than
fail silently
* Fixed: Added cachebuster to google export URL to avoid Google
Calendar errors
* Fixed: Week view was always using AM and PM
* Fixed: Repeat_box was too small for some translations

= Version 1.2 =
* Added scrollable Week view
* Fixed some notice-level errors

= Version 1.1.3 =
* Fixed: last date issue for recurring events "until" end date
* Fixed an issue with settings page not saving changes.
* Fixed issues when subscribing to calendars.
* Export only published events
* Added translation patch. Thank you josjo!
* Add language and region awareness in functions for Google Map. Thank
you josjo!
* Small translation error in class-ai1ec-app-helper.php. Thank you
josjo!
* Added Dutch, Spanish, and Swedish translations. For up to date
language files, visit

= Version 1.1.2 =
* Fixed: Problem in repeat UI when selecting months before October
* Fixed: Append instance_id only to events permalink
* Fixed: Events ending on date problem
* Feature: Added French translations

= Version 1.1.1 =
* Fixes a problem when plugin is enabled for first time

= Version 1.1 =
* Feature: New recurrence UI when adding events
* Feature: Translate recurrence rule to Human readable format that
allows localization
* Feature: Add Filter by Categories, Tags to Widget
* Feature: Add option to keep all events expanded in the agenda view
* Feature: Make it possible to globalize the date picker. Thank you
josjo!
* Fixed: On recurring events show the date time of the current event
and NOT the original event
* Fixed: Events posted in Standard time from Daylight Savings Time are
wrong
* Fixed: Multi-day Events listing twice
* Fixed: %e is not supported in gmstrftime on Windows
* Improved: IE9 Support
* Improved: Corrected as many as possible HTML validation errors
* Improved: Optimization changes for better performance.

= Version 1.0.9 =
* Fixed a problem with timezone dropdown list

= Version 1.0.8 =
* Added better if not full localization support - thank you josjo
* Added qTranslate support and output to post data using WordPress
filters
* Added uninstall support
* Added 24h time in time pickers - thank you josjo
* Fixed an issue when event duration time is decremented in single
(detailed) view
* Fixed an issue with times for ics imported events
* Better timezone control
* Fixed the category filter in agenda view
* Fixed event date being set to null when using quick edit
* Fixed a bug in time pickers - thank you josjo
* Deprecated function split() is removed

= Version 1.0.7 =
* Fixed issue with some MySQL version
* Added better localization support - thank you josjo
* Added layout/formatting improvements
* Fixed issues when re-importing ics feeds

= Version 1.0.6 =
* Fixed issue with importing of iCalendar feeds that define time zone
per-property (e.g., Yahoo! Calendar feeds)
* Fixed numerous theme-related layout/formatting issues
* Fixed issue with all-day events after daylight savings time showing
in duplicate
* Fixed issue where private events would not show at all in the
front-end
* Fixed duplicate import issue with certain feeds that do not uniquely
identify events (e.g., ESPN)
* Added option to General Settings for inputting dates in US format
* Added option to General Settings for excluding events from search
results
* Added error messages for iCalendar feed validation
* Improved support for multiple locales

= Version 1.0.5 =
* Added agenda-like Upcoming Events widget
* Added tooltips to category color squares
* Fixed Firefox-specific JavaScript errors and layout bugs
* Added useful links to plugins list page
* Fixed bug where feed frequency setting wasn't being updated
* Made iCalendar subscription buttons optional

= Version 1.0.4 =
* Improved layout of buttons around map in single event view
* Set Content-Type to `text/calendar` for exported iCalendar feeds
* Added Donate button to Settings screen

= Version 1.0.3 =
* Changed plugin name from `All-in-One Events Calendar` to `All-in-One
Event Calendar`
* **Important notice:** When upgrading to version `1.0.3` you must
reactivate the plugin.

= Version 1.0.2 =
* Fixed the URL for settings page that is displayed in the notice

= Version 1.0.1 =
* Fixed bug where calendar appears on every page before it's been
configured
* Displayed appropriate setup notice when user lacks administrator
capabilities

= Version 1.0 =
* Initial release

== Installation ==

1. Upload `all-in-one-event-calendar` to the `/wp-content/plugins/`
directory.
2. Activate the plugin through the **Plugins** menu item in the
WordPress Dashboard.
3. Once the plugin is activated, follow the instructions in the notice
to configure it.

= For advanced users: =

To place the calendar in a DOM/HTML element besides the default page
content container without modifying the theme:

1. Navigate to **Events** > **Settings** > **Advanced** > **Advanced
Settings** in the WordPress Dashboard.
2. Enter a CSS or jQuery-style selector of the target element in the
**Move calendar into this DOM element** field.
3. Click **Update**.

== Screenshots ==

1. Posterboard view
2. Add New Event page
3. Settings page
4. Month view
5. Event details page

== Upgrade Notice ==

= 2.0 =
I you believe you are missing functionality, please visit our site and
download the correspoding Add-on.

= 1.0.3 =
When upgrading to from below `1.0.3` you must reactivate the plugin.