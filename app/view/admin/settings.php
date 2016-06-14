<?php

/**
 * The Settings page.
 *
 * @author     Time.ly Network Inc.
 * @since      2.0
 *
 * @package    AI1EC
 * @subpackage AI1EC.View
 */
class Ai1ec_View_Admin_Settings extends Ai1ec_View_Admin_Abstract {

	/**
	 * @var string The nonce action
	 */
	CONST NONCE_ACTION = 'ai1ec_settings_save';

	/**
	 * @var string The nonce name
	 */
	CONST NONCE_NAME  = 'ai1ec_settings_nonce';

	/* (non-PHPdoc)
	 * @see Ai1ec_View_Admin_Abstract::display_page()
	 */
	public function display_page() {
		$settings = $this->_registry->get( 'model.settings' );
		$args = array(
			'title' => Ai1ec_I18n::__(
				'All-in-One Event Calendar: Settings'
			),
			'nonce' => array(
				'action'   => self::NONCE_ACTION,
				'name'     => self::NONCE_NAME,
				'referrer' => false,
			),
			'metabox' => array(
				'screen' => $settings->get( 'settings_page' ),
				'action' => 'left',
				'object' => null
			),
			'support' => array(
				'screen' => $settings->get( 'settings_page' ),
				'action' => 'right',
				'object' => null
			),
			'action' =>
				ai1ec_admin_url(
					'?controller=front&action=ai1ec_save_settings&plugin=' .
					AI1EC_PLUGIN_NAME
				),
		);
		$loader = $this->_registry->get( 'theme.loader' );
		$file   = $loader->get_file( 'setting/page.twig', $args, true );
		$file->render();
		if ( apply_filters( 'ai1ec_robots_install', true ) ) {
			$this->_registry->get( 'robots.helper' )->install();
		}
	}

	/* (non-PHPdoc)
	 * @see Ai1ec_View_Admin_Abstract::add_page()
	 */
	public function add_page() {
		$settings_page = add_submenu_page(
			AI1EC_ADMIN_BASE_URL,
			Ai1ec_I18n::__( 'Settings' ),
			Ai1ec_I18n::__( 'Settings' ),
			'manage_ai1ec_options',
			AI1EC_PLUGIN_NAME . '-settings',
			array( $this, 'display_page' )
		);
		$this->_registry->get( 'model.settings' )
			->set( 'settings_page', $settings_page );
	}

	/**
	 * Adds metabox to the page.
	 *
	 * @wp_hook admin_init
	 *
	 * @return void
	 */
	public function add_meta_box() {
		// Add the 'General Settings' meta box.
		add_meta_box(
			'ai1ec-general-settings',
			Ai1ec_I18n::_x( 'General Settings', 'meta box' ),
			array( $this, 'display_meta_box' ),
			$this->_registry->get( 'model.settings' )->get( 'settings_page' ),
			'left',
			'default'
		);
		// Add the 'Timely' meta box.
		add_meta_box(
			'ai1ec-support',
			Ai1ec_I18n::_x( 'Timely', 'meta box', AI1EC_PLUGIN_NAME ),
			array( $this, 'support_meta_box' ),
			$this->_registry->get( 'model.settings' )->get( 'settings_page' ),
			'right',
			'default'
		);
	}

	/**
	 * Renders the Timely blog meta box
	 *
	 * @param mixed $object
	 * @param mixed $box
	 */
	public function support_meta_box( $object, $box ) {
		$newsItems = $this->_registry->get( 'news.feed' )->import_feed();
		$loader    = $this->_registry->get( 'theme.loader' );
		$file      = $loader->get_file(
			'box_support.php',
			array(
				'news' => $newsItems,
			),
			true
		);
		$file->render();
	}

	/* (non-PHPdoc)
	 * @see Ai1ec_View_Admin_Abstract::handle_post()
	 */
	public function handle_post() {
	}

	/**
	 * Displays the meta box for the settings page.
	 *
	 * @param mixed $object
	 * @param mixed $box
	 */
	public function display_meta_box( $object, $box )  {
		$tabs = array(
			'viewing-events' => array(
				'name' => Ai1ec_I18n::__( 'Viewing Events' ),
			),
			'editing-events' => array(
				'name' => Ai1ec_I18n::__( 'Adding/Editing Events' ),
			),
			'advanced' => array(
				'name' => Ai1ec_I18n::__( 'Advanced' ),
				'items' => array(
					'advanced'       => Ai1ec_I18n::__( 'Advanced Settings' ),
					'embedded-views' => Ai1ec_I18n::__( 'Shortcodes' ),
					'email'          => Ai1ec_I18n::__( 'Email Templates' ),
					'apis'           => Ai1ec_I18n::__( 'External Services' ),
					'cache'          => Ai1ec_I18n::__( 'Cache Report' ),
				)
			),
		);

		// let other extensions add tabs.
		$tabs             = apply_filters( 'ai1ec_add_setting_tabs', $tabs );
		$settings         = $this->_registry->get( 'model.settings' );
		$plugin_settings  = $settings->get_options();
		$tabs             = $this->_get_tabs_to_show( $plugin_settings, $tabs );
		$loader           = $this->_registry->get( 'theme.loader' );
		
		$api               = $this->_registry->get( 'model.api.api-registration' );
		$signup_available  = $api->is_api_sign_up_available();		
		$signed_to_api     = $api->is_signed();
		$ticketing_message = $api->get_sign_message();
		$loader            = $this->_registry->get( 'theme.loader' );
		$account           = $api->get_current_account();
		$signup_args       = array(
			'api_signed'            => $signed_to_api,
			'signup_available'      => $signup_available,
			'title'                 => Ai1ec_I18n::__(
				'Please, Sign In to Timely Network.'
			),
			'nonce'                 => array(
				'action'   => 'ai1ec_api_ticketing_signup',
				'name'     => 'ai1ec_api_ticketing_nonce',
				'referrer' => false,
			),
			'api_action'            =>
				'?controller=front&action=ai1ec_api_ticketing_signup&plugin=' .
				AI1EC_PLUGIN_NAME,
			'required_text'         => Ai1ec_I18n::__( 'This field is required.' ),
			'register_text'         => Ai1ec_I18n::__( 'Register' ),
			'sign_in_text'          => Ai1ec_I18n::__( 'Sign in' ),
			'signed_in_text'        => Ai1ec_I18n::__(
				'You are signed in to <b>Timely Network</b> as ' . $account
			),
			'sign_out_text'         => Ai1ec_I18n::__( 'Sign out' ),
			'full_name_text'        => Ai1ec_I18n::__( 'Full Name:' ),
			'hide_form_text'        => Ai1ec_I18n::__( 'Hide form' ),
			'show_form_text'        => Ai1ec_I18n::__( 'Show form' ),
			'email_text'            => Ai1ec_I18n::__( 'Email:' ),
			'password_text'         => Ai1ec_I18n::__( 'Password:' ),
			'confirm_password_text' => Ai1ec_I18n::__( 'Confirm Password:' ),
			'phone_number_text'     => Ai1ec_I18n::__( 'Phone Number:' ),
			'terms_text'            => Ai1ec_I18n::__(
				'I confirm that I have read, understand and agree with the <a href="https://time.ly/tos">terms of service</a>.'
			),
			'sign_out_warning'      => Ai1ec_I18n::__(
				'<h4>Attention Required:</h4>If you sign out all your Tickets on the Timely Network will become unavailable immediately. You are responsible for refunding the ticket holders if any of the events were cancelled. Please, read the <a href="https://ticketing.time.ly/terms">Terms&nbsp;and&nbsp;Conditions</a> for more details.'
			),
			'sign_out_cancel'       => Ai1ec_I18n::__( 'Cancel' ),
			'sign_out_confirm'      => Ai1ec_I18n::__( 'Sign Out' ),
			'sign_up_button_text'   => Ai1ec_I18n::__( 'Sign Up' ),
			'sign_in_button_text'   => Ai1ec_I18n::__( 'Sign In' ),
		);
		$loader->get_file( 'setting/api-signup.twig', $signup_args, true )->render();
		
		
		$args             = array(
			'tabs'          => $tabs,
			'content_class' => 'ai1ec-form-horizontal',
			'submit'        => array(
				'id'          => 'ai1ec_save_settings',
				'value'       => '<i class="ai1ec-fa ai1ec-fa-save ai1ec-fa-fw"></i> ' .
					Ai1ec_I18n::__( 'Save Settings' ),
				'args'        => array(
					'class'     => 'ai1ec-btn ai1ec-btn-primary ai1ec-btn-lg',
				),
			),
			'pre_tabs_markup'   => sprintf(
				'<div class="ai1ec-gzip-causes-js-failure">' .
				Ai1ec_I18n::__(
					'If the form below is not working please follow <a href="%s">this link</a>.'
				) .
				'</div>',
				wp_nonce_url(
					esc_url( add_query_arg( 'ai1ec_disable_gzip_compression', '1' ) ),
					'ai1ec_disable_gzip_compression'
				)
			)
		);

		$file = $loader->get_file( 'setting/bootstrap_tabs.twig', $args, true );
		$file->render();
		
	}

	/**
	 * Based on the plugin options, decides what tabs to render.
	 *
	 *
	 *
	 * @param array $plugin_settings
	 * @param array $tabs
	 *
	 * @return array
	 */
	protected function _get_tabs_to_show( array $plugin_settings, array $tabs ) {
		$index = 0;
		$renderer = $this->_registry->get( 'html.element.setting-renderer' );
		foreach ( $plugin_settings as $id => $setting ) {
			// if the setting is shown
			if ( isset ( $setting['renderer'] ) ) {
				$tab_to_use = isset( $setting['renderer']['item'] ) ?
					$setting['renderer']['item'] :
					$setting['renderer']['tab'];
				// check if it's the first one
				if (
					! isset ( $tabs[$tab_to_use]['elements'] )
				) {
					$tabs[$tab_to_use]['elements'] = array();
				}
				$setting['id'] = $id;
				// render the settings
				$weight = 10;
				if ( isset( $setting['renderer']['weight'] ) ) {
					$weight = (int)$setting['renderer']['weight'];
				}
				// NOTICE: do NOT change order of two first
				// elements {weight,index}, otherwise sorting will fail.
				$tabs[$tab_to_use]['elements'][] = array(
					'weight' => $weight,
					'index'  => ++$index,
					'html'   => $renderer->render( $setting ),
				);
				// if the settings has an item tab, set the item as active.
				if ( isset( $setting['renderer']['item'] ) ) {
					if ( ! isset( $tabs[$setting['renderer']['tab']]['items_active'][$setting['renderer']['item']] ) ) {
						$tabs[$setting['renderer']['tab']]['items_active'][$setting['renderer']['item']] = true;
					}
				}
			}
		}
		$tabs_to_display = array();
		// now let's see what tabs to display.
		foreach ( $tabs as $name => $tab ) {
			// sort by weights
			if ( isset( $tab['elements'] ) ) {
				asort( $tab['elements'] );
			}
			// if a tab has more than one item.
			if ( isset( $tab['items'] ) ) {
				// if no item is active, nothing is shown
				if ( empty( $tab['items_active'] ) ) {
					continue;
				}
				// if only one item is active, do not use the dropdown
				if ( count( $tab['items_active'] ) === 1 ) {
					$name = key($tab['items_active']);
					$tab['name'] = $tab['items'][$name];
					unset ( $tab['items'] );
				} else {
					// check active items for the dropdown
					foreach ( $tab['items'] as $item => $longname ) {
						if ( ! isset( $tab['items_active'][$item] ) ) {
							unset( $tab['items'][$item] );
						}
					}
				}
				// lets make a check to avoid overriding tabs
				if ( ! isset( $tabs_to_display[$name] ) ) {
					$tabs_to_display[$name] = $tab;
				} else {
					$tabs_to_display[$name]['elements'] = $tab['elements'];
				}

			} else {
				// no items, just check for any element to display.
				if ( isset( $tab['elements'] ) ) {
					// lets make a check to avoid overriding tabs
					if ( ! isset( $tabs_to_display[$name] ) ) {
						$tabs_to_display[$name] = $tab;
					} else {
						$tabs_to_display[$name]['elements'] = $tab['elements'];
					}
				}
			}
		}
		return $tabs_to_display;
	}

}
