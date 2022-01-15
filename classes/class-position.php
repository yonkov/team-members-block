<?php
/* Company Position */
class Inpsyde_Challenge_Position_Metabox extends Inpsyde_Challenge_Metaboxes {

	function output_meta_box( $post ) {
		$value = get_post_meta( $post->ID, 'ic_position', true );
		?>
		<div class="form-field">
		<select name="ic_select_field" id="ic_select_field" class="postbox">
			<option value=""><?php esc_html_e( 'Position', 'inpsyde-challenge' ); ?></option>
			<option value="1" <?php selected( $value, '1' ); ?>><?php esc_html_e( 'CEO', 'inpsyde-challenge' ); ?></option>
			<option value="2" <?php selected( $value, '2' ); ?>><?php esc_html_e( 'Business Solutions Architect', 'inpsyde-challenge' ); ?></option>
			<option value="3" <?php selected( $value, '3' ); ?>><?php esc_html_e( 'Tech Lead', 'inpsyde-challenge' ); ?></option>
			<option value="4" <?php selected( $value, '4' ); ?>><?php esc_html_e( 'Project Manager', 'inpsyde-challenge' ); ?></option>
			<option value="5" <?php selected( $value, '5' ); ?>><?php esc_html_e( 'Developer', 'inpsyde-challenge' ); ?></option>
		</select>
		</div>
		<?php
	}
	/**
	 * @param int $postid  The post ID.
	 */
	function save_meta_box( int $postid ) {
		if ( array_key_exists( 'ic_select_field', $_POST ) ) {
			update_post_meta(
				$postid,
				'ic_position',
				$_POST['ic_select_field']
			);
		}
	}
}

new Inpsyde_Challenge_Position_Metabox(
	array(
		'title' => 'Position in the company',
	)
);
