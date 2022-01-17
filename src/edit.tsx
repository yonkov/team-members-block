import * as React from 'react';
import { SelectControl } from '@wordpress/components';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// Import Interfaces
import BlockAttributes from './shared/interfaces/block-attributes'
import TeamMember from './shared/interfaces/team-member'

// data
import { getPosts } from './data';
//helpers
import { companyPosition } from './shared/helpers/functions';

function dropdownWithOptions(posts: TeamMember[]) {
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
		<>
		<SelectControl
			label={__('Select a team member:')}
			value={props.attributes.id}
			className="wp-block-inpsyde-challenge"
			options={
				teamMembers.length && dropdownWithOptions(teamMembers) //dynamic select dropdown with labels and values
			}
			onChange={(value: string) => props.setAttributes({ id: value, teamMembers: teamMembers })}
		/>
		<div>{teamMembers.map((teamMember) =>
			props.attributes.id == teamMember.id ?
			<div className="teamMember" key={props.attributes.id}>
			{teamMember.featured_image ? <img src={teamMember.featured_image} /> : ''}
			<h2>{teamMember.title.rendered}</h2>
				<div className="position">
					{companyPosition(teamMember.ic_position)}
				</div>
			</div> : ''
		)}
		</div>
		</>
	);
}

export default Edit