import type { TypeUseCreateTournamentForm } from '@/src/types/tournament';

export const validateFormFields = (form: TypeUseCreateTournamentForm) => {
	const name = form.getFieldValue('name');
	const roundsNumber = form.getFieldValue('roundsNumber');
	const scoreByes = form.getFieldValue('scoreByes');

	if (name && roundsNumber && scoreByes) {
		return true;
	}

	if (!name) {
		form.validateField('name', 'submit');
	}

	if (!roundsNumber) {
		form.validateField('roundsNumber', 'submit');
	}

	if (!scoreByes) {
		form.validateField('scoreByes', 'submit');
	}
};
