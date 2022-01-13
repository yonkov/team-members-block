<?php
/* Social Media Links */
class Inpsyde_Challenge_Social_Media_Metabox extends Inpsyde_Challenge_Metaboxes {

	function output_meta_box( $post ) {
		$fb_link       = get_post_meta( $post->ID, 'ic_fb', true );
		$linkedin_link = get_post_meta( $post->ID, 'ic_linkedin', true );
		$xing_link     = get_post_meta( $post->ID, 'ic_xing', true );
		$github_link   = get_post_meta( $post->ID, 'ic_github', true );
		?>
		<div class="form-field">
			<label for="ic_fb_field"><?php esc_html_e( 'Facebook', 'inpsyde-challenge' ); ?></label>
			<input name="ic_fb_field" type="text" placeholder="<?php esc_html_e( 'Add facebook profile url here', 'inpsyde-challenge' ); ?>" value="<?php echo esc_html( $fb_link ); ?>" />
		</div>
		<div class="form-field">
			<label for="ic_linkedin_field"><?php esc_html_e( 'Linkedin', 'inpsyde-challenge' ); ?></label>
			<input name="ic_linkedin_field" type="text" placeholder="<?php esc_html_e( 'Add linkedin profile url here', 'inpsyde-challenge' ); ?>" value="<?php echo esc_html( $linkedin_link ); ?>" />
		</div>
		<div class="form-field">
			<label for="ic_xing_field"><?php esc_html_e( 'Xing', 'inpsyde-challenge' ); ?></label>
			<input name="ic_xing_field" type="text" placeholder="<?php esc_html_e( 'Add xyng profile url here', 'inpsyde-challenge' ); ?>" value="<?php echo esc_html( $xing_link ); ?>" />
		</div>
		<div class="form-field">
			<label for="ic_github_field"><?php esc_html_e( 'Github', 'inpsyde-challenge' ); ?></label>
			<input name="ic_github_field" type="text" placeholder="<?php esc_html_e( 'Add github profile url here', 'inpsyde-challenge' ); ?>" value="<?php echo esc_html( $github_link ); ?>" />
		</div>
		<?php
	}
	/**
	 * @param int $postid  The post ID.
	 */
	function save_meta_box( int $postid ) {
		if ( array_key_exists( 'ic_fb_field', $_POST ) ) {
			update_post_meta(
				$postid,
				'ic_fb',
				$_POST['ic_fb_field']
			);
		}
		if ( array_key_exists( 'ic_linkedin_field', $_POST ) ) {
			update_post_meta(
				$postid,
				'ic_linkedin',
				$_POST['ic_linkedin_field']
			);
		}
		if ( array_key_exists( 'ic_xing_field', $_POST ) ) {
			update_post_meta(
				$postid,
				'ic_xing',
				$_POST['ic_xing_field']
			);
		}
		if ( array_key_exists( 'ic_github_field', $_POST ) ) {
			update_post_meta(
				$postid,
				'ic_github',
				$_POST['ic_github_field']
			);
		}
	}
}

new Inpsyde_Challenge_Social_Media_Metabox(
	array(
		'title'   => 'Social Media links',
		'context' => 'side',
	)
);
