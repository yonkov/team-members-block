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
import Options from './shared/interfaces/options'

const Edit:any = ( props: Options) => {
	return (
		<SelectControl
			label={ __( 'Find a team member:' ) }
			value={ props.attributes.content }
			options={ [
				{ value: null, label: 'Select an Employee'},
				{ value: '1', label: 'John Doe' },
				{ value: '2', label: 'Penko Todorov' },
				{ value: '3', label: 'Vasko Ovcata' },
				{ value: '4', label: 'Pesho Peshev' },
			] }
			onChange={ (value:any) => props.setAttributes({ content: value }) }
		/>
	);
}

export default Edit