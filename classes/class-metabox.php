<?php
/**
 * Metabox abstract class for easier metabox creation
 *
 * @link: http://www.wpcraftsman.com/blurbette-plugin-metabox-abstract/
 *
 * @package Team Members Block
 * @since 1.0.0
 */

abstract class Team_Members_Block_Metaboxes {

	protected $noncename = 'ic_nonce';
	protected $nonceval;
	protected $capability;
	protected $post_types;
	protected $priority;
	public $title;
	public $context;
	protected $domid;

	function __construct( array $opts ) {

		if ( empty( $opts['title'] ) ) {
			throw new Exception( 'Metabox title not specified.' );
		}
		$opts = wp_parse_args(
			$opts,
			array(
				'title'      => null,
				'post_types' => array( 'team-members' ),
				'context'    => 'normal',
				'priority'   => 'default',
				'capability' => 'edit_post',
				'domid'      => uniqid( 'icid' ),
				'noncename'  => null,
			)
		);
		foreach ( $opts as $k => $v ) {
			$this->$k = $v;
		}
		if ( empty( $this->nonceval ) ) {
			$this->nonceval = plugin_basename( __FILE__ ) . __CLASS__ . get_current_user_id();
		}
		if ( empty( $opts['noncename'] ) ) {
			$this->create_noncename();
		}
		$this->do_all_hooks();
	}

	public function add_meta_box() {
		if ( ! is_array( $this->post_types ) ) {
			$this->post_types = array( $this->post_types );
		}
		foreach ( $this->post_types as $post_type ) {
			add_meta_box( $this->domid, $this->title, array( $this, 'output_meta_box' ), $post_type, $this->context, $this->priority );
		}
	}

	protected function create_noncename() {
		$this->noncename = 'ic_' . str_rot13( strtolower( get_class( $this ) ) );
	}

	protected function okay_to_save( $postid ) {
		// bail with common conditions
		if ( ! is_numeric( $postid ) || ! $postid ) {
			return false;
		}
		if ( ! current_user_can( $this->capability, $postid ) ) {
			return false;
		}
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return false;
		}
		if ( ! isset( $_POST[ $this->noncename ] ) ) {
			return false;
		}
		if ( ! wp_verify_nonce( $_POST[ $this->noncename ], $this->nonceval ) ) {
			return false;
		}
		return true;
	}

	protected function noncefield() {
		wp_nonce_field( $this->nonceval, $this->noncename );
	}

	abstract public function save_meta_box( int $postid );

	abstract public function output_meta_box( $post );

	protected function do_all_hooks() {
		add_action( 'add_meta_boxes', array( $this, 'add_meta_box' ) );
		add_action( 'save_post', array( $this, 'save_meta_box' ) );
	}
}
