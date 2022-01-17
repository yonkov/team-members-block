import * as React from 'react';
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

// Import Interfaces
import BlockAttributes from './shared/interfaces/block-attributes'

//helpers
import { companyPosition } from './shared/helpers/functions';

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

	return (
		<div className="inpsyde-challenge">
			{teamMembers.map((teamMember) =>
				props.attributes.id == teamMember.id ? //print a teammember on the frontend in case he is selected from the block editor
					<>
					{/**Team Member Box */}
					<div className="teamMember" key={props.attributes.id}>
						<a href={`#popup_${teamMember.id}`}>
                        {teamMember.featured_image ? <img src={teamMember.featured_image} /> : ''}
						<h2>{teamMember.title.rendered}</h2>
						<div className="position">
							{companyPosition(teamMember.ic_position)}
						</div>
                    	</a>
					</div>
					{/** Popup Box With Additiona Info */}
					<div id={`popup_${teamMember.id}`} className="overlay">
						<div className="popup">
							<h2>{teamMember.title.rendered}</h2>
							<a className="close" href="#closed">&times;</a>
							<div className="description"
								dangerouslySetInnerHTML={{ __html: escapeHtml(teamMember.content.rendered) }}>
							</div>
							<div className="social-links">
								<a href={teamMember.ic_social_links.ic_fb_field}>
									<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></i>
								</a>
								<a href={teamMember.ic_social_links.ic_linkedin_field}>
									<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></i>
								</a>
								<a href={teamMember.ic_social_links.ic_xing_field}>
									<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 500 500" stroke="#333"><path vector-effect="non-scaling-stroke" d="M307.8 297.9L463 26H359L203.4 297.8a1.35 1.35 0 0 0 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H407l-99.3-174.7a1.74 1.74 0 0 1 .1-1.4zm-91.9-87.7L157 107a2 2 0 0 0-2-1H59l58.9 104.4a1.13 1.13 0 0 1 .1.8L37 346h96.8a1.54 1.54 0 0 0 1.6-.9l80.5-133.7a2.44 2.44 0 0 0 0-1.2z"/></svg></i>
								</a>
								<a href={teamMember.ic_social_links.ic_github_field}>
									<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></i>
								</a>
							</div>
						</div>
					</div>
					</>
					: 
					''
			)
			}
		</div>
	);
}

export default save