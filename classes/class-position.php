<?php
/* Company Position */
class Team_Members_Block_Position_Metabox extends Team_Members_Block_Metaboxes {

	public function output_meta_box( $post ) {
		$value = get_post_meta( $post->ID, 'ic_position', true );
		?>
		<div class="form-field">
		<select name="ic_select_field" id="ic_select_field" class="postbox">
			<option value=""><?php esc_html_e( 'Position', 'team-members-block' ); ?></option>
			<option value="1" <?php selected( $value, '1' ); ?>><?php esc_html_e( 'CEO', 'team-members-block' ); ?></option>
			<option value="2" <?php selected( $value, '2' ); ?>><?php esc_html_e( 'Business Solutions Architect', 'team-members-block' ); ?></option>
			<option value="3" <?php selected( $value, '3' ); ?>><?php esc_html_e( 'Tech Lead', 'team-members-block' ); ?></option>
			<option value="4" <?php selected( $value, '4' ); ?>><?php esc_html_e( 'Project Manager', 'team-members-block' ); ?></option>
			<option value="5" <?php selected( $value, '5' ); ?>><?php esc_html_e( 'Developer', 'team-members-block' ); ?></option>
		</select>
		</div>
		<?php
	}
	/**
	 * @param int $postid  The post ID.
	 */
	public function save_meta_box( int $postid ) {
		if ( array_key_exists( 'ic_select_field', $_POST ) ) {
			update_post_meta(
				$postid,
				'ic_position',
				$_POST['ic_select_field']
			);
		}
	}
}

new Team_Members_Block_Position_Metabox(
	array(
		'title' => 'Position in the company',
	)
);
