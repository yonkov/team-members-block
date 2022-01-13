<?php
/**
 * Plugin Name:       Inpsyde Challenge
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       inpsyde-challenge
 *
 * @package           create-block
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
function create_block_inpsyde_challenge_block_init() {
     register_block_type( __DIR__ );
}
add_action( 'init', 'create_block_inpsyde_challenge_block_init' );

/* Create Team Members Custom post type */
require_once plugin_dir_path( __FILE__ ) . 'inc/team-members.php';

abstract class Inpsyde_Challenge_Meta_Boxes {
    /**
     * Set up and add the meta box.
     */
    public static function add() {
        $screens = [ 'post', 'team-members' ];
        foreach ( $screens as $screen ) {
            add_meta_box(
                'wporg_box_id',          // Unique ID
                __('Position in the company', 'inpsyde-challenge'), // Box title
                [ self::class, 'html' ],   // Content callback, must be of type callable
                $screen                  // Post type
            );
        }
    }

    /**
     * Save the meta box selections.
     *
     * @param int $post_id  The post ID.
     */
    public static function save( int $post_id ) {
        if ( array_key_exists( 'wporg_field', $_POST ) ) {
            update_post_meta(
                $post_id,
                '_wporg_meta_key',
                $_POST['wporg_field']
            );
        }
    }


    /**
     * Display the meta box HTML to the user.
     *
     * @param \WP_Post $post   Post object.
     */
    public static function html( $post ) {
        $value = get_post_meta( $post->ID, '_wporg_meta_key', true );
        ?>
        <select name="wporg_field" id="wporg_field" class="postbox">
            <option value=""><?php esc_html_e('Position', 'inpsyde-challenge')?></option>
            <option value="ceo" <?php selected( $value, 'ceo' ); ?>><?php esc_html_e('CEO', 'inpsyde-challenge')?></option>
            <option value="bsa" <?php selected( $value, 'bsa' ); ?>><?php esc_html_e('Business Solutions Architect', 'inpsyde-challenge')?></option>
            <option value="tech-lead" <?php selected( $value, 'tech-lead' ); ?>><?php esc_html_e('Tech Lead', 'inpsyde-challenge')?></option>
            <option value="pm" <?php selected( $value, 'pm' ); ?>><?php esc_html_e('Project Manager', 'inpsyde-challenge')?></option>
            <option value="dev" <?php selected( $value, 'dev' ); ?>><?php esc_html_e('Developer', 'inpsyde-challenge')?></option>
        </select>
        <?php
    }
}

add_action( 'add_meta_boxes', [ 'Inpsyde_Challenge_Meta_Boxes', 'add' ] );
add_action( 'save_post', [ 'Inpsyde_Challenge_Meta_Boxes', 'save' ] );
