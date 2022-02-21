import { __ } from '@wordpress/i18n';

/* Decode company positions */
export function companyPosition(roleId) {
		let position = '';
		switch (roleId) {
			case '1':
				position = __("CEO", 'team-members-block');
				break;
			case '2':
				position = __("Business Solutions Architect", 'team-members-block');
				break;
			case '3':
				position = __("Tech Lead", 'team-members-block');
				break;
			case '4':
				position = __("Project Manager", 'team-members-block');
				break;
			case '5':
				position = __("Developer", 'team-members-block');
				break;
		}
		return position;

	}