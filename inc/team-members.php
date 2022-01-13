<?php
/**
 * Custom Post Type Team Members
 *
 * @package Inpsyde Challenge
 * @since 1.0.0
 */

function inpsyde_challenge_register_custom_post_type() {
    $labels = [
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
    ];
    $args   = [
        'label'               => __( 'Team Members' ),
        'description'         => __( 'Create Interactive User Team Members for your Admin Users' ),
        'labels'              => $labels,
        'supports'            => [ 'title', 'editor', 'author', 'thumbnail', 'revisions', 'custom-fields' ],
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
    ];
    register_post_type( 'Team-Members', $args );
}
add_action( 'init', 'inpsyde_challenge_register_custom_post_type', 0 );