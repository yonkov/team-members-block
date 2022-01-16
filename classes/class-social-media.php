<?php
/* Social Media Links */
class Inpsyde_Challenge_Social_Media_Metabox extends Inpsyde_Challenge_Metaboxes {

	public function output_meta_box( $post ) {
		$social_links = get_post_meta( $post->ID, 'ic_social_links', true );
		?>
		<div class="form-field">
			<label for="ic_fb_field"><?php esc_html_e( 'Facebook', 'inpsyde-challenge' ); ?></label>
			<input name="ic_fb_field" type="text" placeholder="<?php esc_html_e( 'Add facebook profile url here', 'inpsyde-challenge' ); ?>" value="<?php echo esc_html( isset( $social_links['ic_fb_field'] ) ? $social_links['ic_fb_field'] : '' ); ?>" />
		</div>
		<div class="form-field">
			<label for="ic_linkedin_field"><?php esc_html_e( 'Linkedin', 'inpsyde-challenge' ); ?></label>
			<input name="ic_linkedin_field" type="text" placeholder="<?php esc_html_e( 'Add linkedin profile url here', 'inpsyde-challenge' ); ?>" value="<?php echo esc_html( isset( $social_links['ic_linkedin_field'] ) ? $social_links['ic_linkedin_field'] : '' ); ?>" />
		</div>
		<div class="form-field">
			<label for="ic_xing_field"><?php esc_html_e( 'Xing', 'inpsyde-challenge' ); ?></label>
			<input name="ic_xing_field" type="text" placeholder="<?php esc_html_e( 'Add xyng profile url here', 'inpsyde-challenge' ); ?>" value="<?php echo esc_html( isset( $social_links['ic_xing_field'] ) ? $social_links['ic_xing_field'] : '' ); ?>" />
		</div>
		<div class="form-field">
			<label for="ic_github_field"><?php esc_html_e( 'Github', 'inpsyde-challenge' ); ?></label>
			<input name="ic_github_field" type="text" placeholder="<?php esc_html_e( 'Add github profile url here', 'inpsyde-challenge' ); ?>" value="<?php echo esc_html( isset( $social_links['ic_github_field'] ) ? $social_links['ic_github_field'] : '' ); ?>" />
		</div>
		<?php
	}
	/**
	 * @param int $postid  The post ID.
	 */
	public function save_meta_box( int $postid ) {
		if ( array_key_exists( 'ic_fb_field', $_POST ) || array_key_exists( 'ic_linkedin_field', $_POST )
		|| array_key_exists( 'ic_xing_field', $_POST ) || array_key_exists( 'ic_github_field', $_POST ) ) {
			$social_links_values = array(
				'ic_fb_field'       => $_POST['ic_fb_field'],
				'ic_linkedin_field' => $_POST['ic_linkedin_field'],
				'ic_xing_field'     => $_POST['ic_xing_field'],
				'ic_github_field'   => $_POST['ic_github_field'],
			);
			update_post_meta(
				$postid,
				'ic_social_links',
				$social_links_values
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
