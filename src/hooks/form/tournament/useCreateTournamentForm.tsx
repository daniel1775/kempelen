import { useForm } from '@tanstack/react-form';
import { useRouter } from 'expo-router';

import type { TypeTournamentToCreate } from '@/src/types/tournament';

export const useCreateTournamentForm = () => {
	const router = useRouter();

	const formInitialValues: TypeTournamentToCreate = {
		title: '',
		roundsNumber: 0,
		tiebreak: '',
		scoreByes: '',
		description: '',
		image: '',
	};

	const form = useForm({
		defaultValues: formInitialValues,
		onSubmit: async ({ value }) => {
			try {
				// TODO: Implement createTournament mutation when available
				console.log('[submitCreateTournamentForm] value: ', value);
				router.back();
			} catch (err) {
				console.error('[submitCreateTournamentForm] error: ', err);
			}
		},
	});

	return form;
};
