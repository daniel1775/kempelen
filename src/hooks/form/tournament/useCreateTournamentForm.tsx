import { useForm } from '@tanstack/react-form';

import { useCreateTournament } from '@/src/hooks/queries/tournament/useCreateTournament';
import { useEditTournament } from '@/src/hooks/queries/tournament/useEditTournament';
import { saveImageLocally } from '@/src/utils/image/saveImageLocally';
import { useGetAllTiebreaks } from '@/src/hooks/queries/tiebreak/useGetAllTiebreaks';

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
	const { mutateAsync: createTournament } = useCreateTournament();
	const { mutateAsync: editTournament } = useEditTournament();
	const { allTiebreaksData } = useGetAllTiebreaks();

	const formInitialValues: TypeTournamentToCreate = {
		name: tournamentToEdit?.name || '',
		roundsNumber: tournamentToEdit?.roundsNumber || 5,
		tiebreaks: tournamentToEdit?.tiebreaks || allTiebreaksData || [],
		scoreByes: tournamentToEdit?.scoreByes || '',
		description: tournamentToEdit?.description || '',
		image: tournamentToEdit?.image || '',
	};

	const handleCreateTournament = async (
		formTournament: TypeTournamentToCreate,
	) => {
		await createTournament({
			...formTournament,
			roundsNumber: Number(formTournament.roundsNumber),
			image: saveImageLocally(formTournament.image),
		});
	};

	const handleEditTournament = async (
		formTournament: TypeTournamentToCreate,
	) => {
		if (!tournamentToEdit?.id) {
			throw new Error('Tournament ID is required to edit a tournament');
		}

		let imageToUpdate = null;

		const isNewImage =
			formTournament.image && formTournament.image !== tournamentToEdit.image;

		if (isNewImage) {
			imageToUpdate = saveImageLocally(formTournament.image);
		} else {
			imageToUpdate = tournamentToEdit.image;
		}

		const tournamentPayload: TypeTournamentToCreate = {
			name: formTournament.name,
			roundsNumber: Number(formTournament.roundsNumber),
			tiebreaks: formTournament.tiebreaks,
			scoreByes: formTournament.scoreByes,
			description: formTournament.description,
		};
		if (imageToUpdate) {
			tournamentPayload.image = imageToUpdate;
		}

		await editTournament({
			tournamentId: tournamentToEdit.id,
			...tournamentPayload,
		});
	};

	const form = useForm({
		defaultValues: formInitialValues,
		onSubmit: async ({ value }) => {
			try {
				if (tournamentToEdit) {
					await handleEditTournament(value);
					return;
				}

				await handleCreateTournament(value);
			} catch (err) {
				console.error('[submitCreateTournamentForm] error: ', err);
			}
		},
	});

	return form;
};
