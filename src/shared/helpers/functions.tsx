import { __ } from '@wordpress/i18n';

/* Decode company positions */
export function companyPosition(roleId) {
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