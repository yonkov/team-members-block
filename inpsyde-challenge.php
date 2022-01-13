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
	 register_block_type( __DIR__ );
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