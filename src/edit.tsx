import * as React from 'react';
import { SelectControl } from '@wordpress/components';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
//import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
// Import Interfaces
import BlockAttributes from './shared/interfaces/block-attributes'
import TeamMember from './shared/interfaces/team-member'

// data
import { getPosts } from './data';

function dropdownWithOptions(posts: Array<TeamMember>) {
	const options = [
		{
			label: __('Select an Employee', 'custom-welcome-guide'),
			value: ''
		}
	];
	posts && posts.forEach(post => {
		options.push({
			label: post.title.rendered,
			value: post.id
		})
	});

	return options
}

const Edit: any = (props: BlockAttributes) => {

	const teamMembers: Array<TeamMember> = getPosts();

	return (
		<SelectControl
			label={__('Select a team member:')}
			value={props.attributes.id}
			options={
				teamMembers.length && dropdownWithOptions(teamMembers) //dynamic select dropdown with labels and values
			}
			onChange={(value: string) => props.setAttributes({ id: value, teamMembers: teamMembers })}
		/>
	);
}

export default Edit