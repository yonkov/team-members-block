<?php
/**
 * Plugin Name:       Inpsyde Challenge
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            The WordPress Contributors
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
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function inpsyde_challenge_block_init() {
	if ( is_admin() ) {
		/**
		 * Register the block only on post type page
		 *
		 * @link: https://www.designbombs.com/registering-gutenberg-blocks-for-custom-post-type/
		 */
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
		register_block_type( __DIR__ );
	}
}
add_action( 'init', 'inpsyde_challenge_block_init' );

/* Create Team Members Custom post type */
require_once plugin_dir_path( __FILE__ ) . 'inc/team-members.php';

/* Abstract class for metaboxes */
require_once plugin_dir_path( __FILE__ ) . '/classes/class-metabox.php';
/* Company Position */
require_once plugin_dir_path( __FILE__ ) . '/classes/class-position.php';
/* Social Media links */
require_once plugin_dir_path( __FILE__ ) . '/classes/class-social-media.php';

/**
 * Add Featured Image Url to WP Json
 *
 * @see https://stackoverflow.com/questions/33320227/wp-rest-api-angularjs-how-to-grab-featured-image-for-display-on-page
 */

// Get image URL
function inpsyde_challenge_get_thumbnail_url( $post ) {
	if ( has_post_thumbnail( $post['id'] ) ) {
		$imgArray = wp_get_attachment_image_src( get_post_thumbnail_id( $post['id'] ), 'medium_large' );
		$imgURL   = $imgArray[0];
		return esc_url( $imgURL );
	} else {
		return false;
	}
}

function inpsyde_challenge_insert_thumbnail_url() {
	register_rest_field(
		'team-members',
		'featured_image',  // key-name in json response
		array(
			'get_callback'    => 'inpsyde_challenge_get_thumbnail_url',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}

add_action( 'rest_api_init', 'inpsyde_challenge_insert_thumbnail_url' );

/* Register Team Members meta data to WP Json */
register_rest_field(
	'team-members',
	'ic_meta_position',
	array(
		'get_callback' => function ( $data ) {
			return get_post_meta( $data['id'], 'ic_position', true );
		},
	)
);
