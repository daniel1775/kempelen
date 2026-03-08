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

	const form = useForm({
		defaultValues: formInitialValues,
		onSubmit: async ({ value, meta }) => {
			try {
				const dir = new Directory(Paths.document, 'players');
				dir.create({
					overwrite: true,
					idempotent: true,
				});
				let imageFile: File | null = null;

				if (playerToEdit) {
					let imageToUpdate = null;
					if (isNewImage(value, playerToEdit)) {
						imageFile = new File(value.imageUrl);
						imageFile.move(dir);
						imageToUpdate = imageFile.name;
					} else if (
						value.imageUrl &&
						playerToEdit.imageUrl === value.imageUrl
					) {
						imageToUpdate = playerToEdit.imageUrl;
					}

					const playerToUpdate: TypePlayerToCreate = {
						name: value.name,
						chessProfileUrl: value.chessProfileUrl ?? '',
						elo: Number(value.elo),
					};
					if (imageToUpdate) {
						playerToUpdate.imageUrl = imageToUpdate;
					}

					editPlayer.mutate({
						...playerToUpdate,
						playerId: playerToEdit.id,
					});
				} else {
					if (value.imageUrl) {
						imageFile = new File(value.imageUrl);
						imageFile.move(dir);
					}

					const playerToCreate: TypePlayerToCreate = {
						...value,
						elo: Number(value.elo),
						imageUrl: imageFile?.name ? imageFile?.name : '',
					};

					createPlayer.mutate(playerToCreate);
				}

				router.back();
			} catch (err) {
				console.error('[submitCreatePlayerForm] error: ', err);
			}
		},
	});

	return form;
};
