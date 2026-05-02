import { useForm } from '@tanstack/react-form';
import { useRouter } from 'expo-router';

import { useCreatePlayer } from '@/hooks/queries/player/useCreatePlayer';
import { useEditPlayer } from '@/hooks/queries/player/useEditPlayer';
import { saveImageLocally } from '@/src/utils/image/saveImageLocally';

import {
	isNewImage,
	type TypePlayer,
	type TypePlayerToCreate,
} from '@/src/types/player';

type TypeCreatePlayerForm = {
	playerToEdit?: TypePlayer | null;
};

export const useCreatePlayerForm = ({ playerToEdit }: TypeCreatePlayerForm) => {
	const router = useRouter();

	const editPlayer = useEditPlayer();
	const createPlayer = useCreatePlayer();

	const formInitialValues: TypePlayerToCreate = playerToEdit
		? {
				name: playerToEdit.name,
				chessProfileUrl: playerToEdit.chessProfileUrl,
				imageUrl: playerToEdit.imageUrl,
				elo: playerToEdit.elo,
			}
		: {
				name: '',
				chessProfileUrl: '',
				elo: 0,
				imageUrl: '',
			};

	const handleCreatePlayer = async (formPlayer: TypePlayerToCreate) => {
		const playerToCreate: TypePlayerToCreate = {
			...formPlayer,
			elo: Number(formPlayer.elo),
			imageUrl: saveImageLocally(formPlayer.imageUrl),
		};

		await createPlayer.mutateAsync(playerToCreate);
	};

	const handleEditPlayer = async (
		formPlayer: TypePlayerToCreate,
		playerToEdit: TypePlayer,
	) => {
		let imageToUpdate = null;

		if (isNewImage(formPlayer, playerToEdit)) {
			imageToUpdate = saveImageLocally(formPlayer.imageUrl);
		} else if (
			formPlayer.imageUrl &&
			playerToEdit.imageUrl === formPlayer.imageUrl
		) {
			imageToUpdate = playerToEdit.imageUrl;
		}

		const playerToUpdate: TypePlayerToCreate = {
			name: formPlayer.name,
			chessProfileUrl: formPlayer.chessProfileUrl ?? '',
			elo: Number(formPlayer.elo),
		};
		if (imageToUpdate) {
			playerToUpdate.imageUrl = imageToUpdate;
		}

		await editPlayer.mutateAsync({
			...playerToUpdate,
			playerId: playerToEdit.id,
		});
	};

	const form = useForm({
		defaultValues: formInitialValues,
		onSubmit: async ({ value, meta }) => {
			try {
				if (playerToEdit) {
					await handleEditPlayer(value, playerToEdit);
				} else {
					await handleCreatePlayer(value);
				}

				router.back();
			} catch (err) {
				console.error('[submitCreatePlayerForm] error: ', err);
			}
		},
	});

	return form;
};
