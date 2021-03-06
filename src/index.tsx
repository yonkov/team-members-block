import * as React from 'react';
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
 registerBlockType( 'create-block/team-members-block', {
	title: __( 'Team Members', 'team-members-block' ),
	description: __(
		'An example typescript block.',
		'team-members-block'
	),
	category: 'widgets',
	icon: 'smiley',
	supports: {
		html: true,
	},
	attributes: {
		id: {
			type: 'string',
            default: '',
		},
		teamMembers:{
			type: 'array',
			default: []
		}

	},
	edit: edit,
	save: save,
} );