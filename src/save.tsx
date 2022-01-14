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

export default function save( props: BlockAttributes) {
	const teamMembers = props.attributes.teamMembers;
	console.log(teamMembers);
	return (
		<div className="inpsyde-challenge">
            {teamMembers.map( (teamMember) =>
				props.attributes.id == teamMember.id ? //print a teammember on the frontend in case he is selected from the block editor
				<>
				{teamMember.title.rendered}
				{teamMember.content.rendered}
				{<img src={teamMember.featured_image} />}
				{teamMember.ic_meta_position}
				</>: '' // description
			)
			}
        </div>
	);
}