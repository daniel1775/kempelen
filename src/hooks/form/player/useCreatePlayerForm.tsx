import { useForm } from '@tanstack/react-form';
import { Directory, Paths, File } from 'expo-file-system';
import { useRouter } from 'expo-router';

import { useCreatePlayer } from '@/hooks/queries/player/useCreatePlayer';
import { useEditPlayer } from '@/hooks/queries/player/useEditPlayer';

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

	const handleCreatePlayer = async (
		formPlayer: TypePlayerToCreate,
		dir: Directory,
	) => {
		const playerToCreate: TypePlayerToCreate = {
			...formPlayer,
			elo: Number(formPlayer.elo),
			imageUrl: handleSaveImage(dir, formPlayer.imageUrl),
		};

		await createPlayer.mutateAsync(playerToCreate);
	};

	const handleEditPlayer = async (
		formPlayer: TypePlayerToCreate,
		playerToEdit: TypePlayer,
		dir: Directory,
	) => {
		let imageToUpdate = null;

		if (isNewImage(formPlayer, playerToEdit)) {
			imageToUpdate = handleSaveImage(dir, formPlayer.imageUrl);
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
				const dir = new Directory(Paths.document, 'players');
				dir.create({
					overwrite: true,
					idempotent: true,
				});

				if (playerToEdit) {
					await handleEditPlayer(value, playerToEdit, dir);
				} else {
					await handleCreatePlayer(value, dir);
				}

				router.back();
			} catch (err) {
				console.error('[submitCreatePlayerForm] error: ', err);
			}
		},
	});

	return form;
};
