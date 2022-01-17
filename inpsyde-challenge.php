<?php
/**
 * Plugin Name:       Inpsyde Challenge
 * Description:       Team Members custom gutenberg block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.5
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Atanas Yonkov
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       inpsyde-challenge
 *
 * @package           inpsyde-challenge
 */

/**
 * Exit if accessed directly
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'Woof Woof Woof!' );
}

/**
 * Base class for instantiating the plugin.
 *
 * This class registers the post types, scripts and styles that are necessary for the plugin to work.
 * It extends the wp rest api by adding rest fields with custom meta data.
 */
class Inpsyde_Challenge {

	/**
	 * Initializes the plugin base functions.
	 *
	 * Should be called in the WordPress init hook.
	 */
	public static function init() {
		self::register_post_types();
		self::enqueue_scripts();
		self::enqueue_styles();
	}

	/**
	 * Registers the custom post types.
	 *
	 * team-members are registered by this function.
	 */
	public static function register_post_types() {
		$labels = array(
			'name'               => __( 'Team Members' ),
			'singular_name'      => __( 'Team Member' ),
			'menu_name'          => __( 'Team Members' ),
			'parent_item_colon'  => __( 'Parent Team Member' ),
			'all_items'          => __( 'All Team Members' ),
			'view_item'          => __( 'View Team Member' ),
			'add_new_item'       => __( 'Add New Team Member' ),
			'add_new'            => __( 'Add New' ),
			'edit_item'          => __( 'Edit Team Member' ),
			'update_item'        => __( 'Update Team Member' ),
			'search_items'       => __( 'Search Team Member' ),
			'not_found'          => __( 'Not Found' ),
			'not_found_in_trash' => __( 'Not found in Trash' ),
		);
		$args   = array(
			'label'               => __( 'Team Members' ),
			'description'         => __( 'Create Interactive User Team Members for your Admin Users' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'editor', 'author', 'thumbnail', 'revisions', 'custom-fields' ),
			'public'              => false,
			'rewrite'             => false,
			'publicly_queryable'  => false,
			'hierarchical'        => false,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'show_in_admin_bar'   => true,
			'has_archive'         => false,
			'can_export'          => true,
			'exclude_from_search' => false,
			'yarpp_support'       => true,
			'capability_type'     => 'page',
			'show_in_rest'        => true,
			'rest_base'           => 'team-members',
		);
		register_post_type( 'Team-Members', $args );
	}

	/**
	 * Include the plugin's scripts to the system.
	 * Add the block scripts on post type page only
	 *
	 * @link: https://www.designbombs.com/registering-gutenberg-blocks-for-custom-post-type/
	 */
	public static function enqueue_scripts() {
		// load scripts and styles for the block editor only
		if ( is_admin() ) {
			global $pagenow;
			$typenow = '';

			if ( 'post-new.php' === $pagenow ) {
				if ( isset( $_REQUEST['post_type'] ) && post_type_exists( $_REQUEST['post_type'] ) ) {
					$typenow = $_REQUEST['post_type'];
				};
			} elseif ( 'post.php' === $pagenow ) {
				if ( isset( $_GET['post'] ) && isset( $_POST['post_ID'] ) && (int) $_GET['post'] !== (int) $_POST['post_ID'] ) {
					// Do nothing
				} elseif ( isset( $_GET['post'] ) ) {
					$post_id = (int) $_GET['post'];
				} elseif ( isset( $_POST['post_ID'] ) ) {
					$post_id = (int) $_POST['post_ID'];
				}
				if ( $post_id ) {
					$post    = get_post( $post_id );
					$typenow = $post->post_type;
				}
			}
			if ( $typenow != 'page' ) {
				return;
			}
			$script_asset = require plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

			wp_enqueue_script( 'inpsyde-challenge-plugin-script', plugins_url( 'build/index.js', __FILE__ ), $script_asset['dependencies'], $script_asset['version'], true );

			$script_params = array(
				'rest_url' => esc_url( get_rest_url() ),
			);
			// let the frontend know the rest url to enable api calls
			wp_localize_script( 'inpsyde-challenge-plugin-script', 'inpsyde_challenge_script_params', $script_params );
		}
	}

	/**
	 * Registers the plugin's styles.
	 */
	public static function enqueue_styles() {
		if ( is_admin() ) {
			wp_enqueue_style( 'inpsyde-challenge-admin', plugins_url( 'build/main.css', __FILE__ ), array( 'wp-components' ), filemtime( plugin_dir_path( __FILE__ ) ) );
		} else { // load frontend scripts and styles
			wp_enqueue_style( 'inpsyde-challenge', plugins_url( 'build/style-main.css', __FILE__ ), array(), filemtime( plugin_dir_path( __FILE__ ) ) );
		}
	}

	/**
	 *  Add Custom Post Meta to WP Json Response
	 */
	public static function register_rest_data() {
		register_rest_field(
			'team-members',
			'featured_image',  // key-name in json response
			array(
				'get_callback'    => array( 'Inpsyde_Challenge', 'get_ic_featured_image' ),
				'update_callback' => null,
				'schema'          => null,
			)
		);

		register_rest_field(
			'team-members',
			'ic_position',
			array(
				'get_callback'    => array( 'Inpsyde_Challenge', 'get_ic_post_meta' ),
				'update_callback' => null,
				'schema'          => null,
			)
		);

		register_rest_field(
			'team-members',
			'ic_social_links',
			array(
				'get_callback'    => array( 'Inpsyde_Challenge', 'get_ic_post_meta' ),
				'update_callback' => null,
				'schema'          => null,
			)
		);
	}

	/* helpers */
	public static function get_ic_post_meta( $object, $field_name, $request ) {
		return get_post_meta( $object['id'], $field_name, true );
	}

	public static function get_ic_featured_image( $object, $field_name, $request ) {
		if ( has_post_thumbnail( $object['id'] ) ) {
			$imgArray = wp_get_attachment_image_src( get_post_thumbnail_id( $object['id'] ), 'medium' );
			$imgURL   = $imgArray[0];
			return esc_url( $imgURL );
		} else {
			return false;
		}
	}
}

add_action( 'init', array( 'Inpsyde_Challenge', 'init' ) );

add_action( 'rest_api_init', array( 'Inpsyde_Challenge', 'register_rest_data' ) );

/* Abstract class for metaboxes */
require_once plugin_dir_path( __FILE__ ) . '/classes/class-metabox.php';
/* Company Position */
require_once plugin_dir_path( __FILE__ ) . '/classes/class-position.php';
/* Social Media links */
require_once plugin_dir_path( __FILE__ ) . '/classes/class-social-media.php';
