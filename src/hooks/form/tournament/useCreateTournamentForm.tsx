import { useForm } from '@tanstack/react-form';
import { useRouter } from 'expo-router';

import { useCreateTournament } from '@/src/hooks/queries/tournament/useCreateTournament';
import { saveImageLocally } from '@/src/utils/image/saveImageLocally';

import type {
	TypeTournamentToCreate,
	TypeTournament,
} from '@/src/types/tournament';

type TypeCreateTournamentFormProps = {
	tournamentToEdit?: TypeTournament | null;
};

export const useCreateTournamentForm = ({
	tournamentToEdit,
}: TypeCreateTournamentFormProps) => {
	const router = useRouter();

	const createTournament = useCreateTournament();

	const formInitialValues: TypeTournamentToCreate = {
		title: tournamentToEdit?.title || '',
		roundsNumber: tournamentToEdit?.roundsNumber || 0,
		tiebreak: tournamentToEdit?.tiebreak || '',
		scoreByes: tournamentToEdit?.scoreByes || '',
		description: tournamentToEdit?.description || '',
		image: tournamentToEdit?.image || '',
	};

	const form = useForm({
		defaultValues: formInitialValues,
		onSubmit: async ({ value }) => {
			try {
				const tournamentToCreate: TypeTournamentToCreate = {
					...value,
					roundsNumber: Number(value.roundsNumber),
					image: saveImageLocally(value.image),
				};

				await createTournament.mutateAsync(tournamentToCreate);

				router.back();
			} catch (err) {
				console.error('[submitCreateTournamentForm] error: ', err);
			}
		},
	});

	return form;
};
