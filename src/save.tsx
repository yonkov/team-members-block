import * as React from 'react';
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

// Import Interfaces
import BlockAttributes from './shared/interfaces/block-attributes'
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(props: BlockAttributes) {

	const teamMembers = props.attributes.teamMembers;

	/**
	 * Strip potentially dangerous html tags to secure post output
	 * @param {string} content 
	 * @returns escaped html
	 */
	function escapeHtml(content) {
		let div = document.createElement('div');
		div.innerHTML = content;

		let scripts = div.querySelectorAll('style, script');
		let i = scripts.length;

		while (i--) {
			scripts[i].parentNode.removeChild(scripts[i]);
		}

		return div.innerHTML;
	}
	/* Decode company positions */
	function companyPosition(roleId) {
		let position = '';
		switch (roleId) {
			case '1':
				position = __("CEO", 'inpsyde-challenge');
				break;
			case '2':
				position = __("Business Solutions Architect", 'inpsyde-challenge');
				break;
			case '3':
				position = __("Tech Lead", 'inpsyde-challenge');
				break;
			case '4':
				position = __("Project Manager", 'inpsyde-challenge');
				break;
			case '5':
				position = __("Developer", 'inpsyde-challenge');
				break;
		}
		return position;

	}

	return (
		<div className="inpsyde-challenge">
			{teamMembers.map((teamMember) =>
				props.attributes.id == teamMember.id ? //print a teammember on the frontend in case he is selected from the block editor
					<div className="teamMember" key={props.attributes.id}>
						{teamMember.featured_image ? <img src={teamMember.featured_image} /> : ''}
						<h2>{teamMember.title.rendered}</h2>
						<div className="description"
							dangerouslySetInnerHTML={{ __html: escapeHtml(teamMember.content.rendered) }}>
						</div>
						<div className="position">
							{companyPosition(teamMember.ic_position)}
						</div>
						<div className="social-links">
							{teamMember.ic_social_links.ic_fb_field}
							{teamMember.ic_social_links.ic_linkedin_field}
							{teamMember.ic_social_links.ic_xing_field}
							{teamMember.ic_social_links.ic_github_field}
						</div>
					</div> : ''
			)
			}
		</div>
	);
}

export default save