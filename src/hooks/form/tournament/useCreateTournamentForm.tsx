import { useForm } from '@tanstack/react-form';
import { Directory, Paths, File } from 'expo-file-system';
import { useRouter } from 'expo-router';

import { useCreateTournament } from '@/src/hooks/queries/tournament/useCreateTournament';

import type { TypeTournamentToCreate } from '@/src/types/tournament';

export const useCreateTournamentForm = () => {
	const router = useRouter();

	const createTournament = useCreateTournament();

	const formInitialValues: TypeTournamentToCreate = {
		title: '',
		roundsNumber: 0,
		tiebreak: '',
		scoreByes: '',
		description: '',
		image: '',
	};

	const handleSaveImage = (dir: Directory, imageUri?: string) => {
		if (!imageUri) {
			return '';
		}
		if (imageUri.startsWith('http')) {
			return imageUri;
		}

		const imageFile = new File(imageUri);
		imageFile.move(dir);

		return imageFile.name;
	};

	const form = useForm({
		defaultValues: formInitialValues,
		onSubmit: async ({ value }) => {
			try {
				const dir = new Directory(Paths.document, 'tournaments');
				dir.create({
					overwrite: true,
					idempotent: true,
				});

				const tournamentToCreate: TypeTournamentToCreate = {
					...value,
					roundsNumber: Number(value.roundsNumber),
					image: handleSaveImage(dir, value.image),
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
