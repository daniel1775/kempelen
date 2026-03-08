import { useCreatePlayerForm } from '../hooks/form/player/useCreatePlayerForm';

export type TypePlayerToCreate = {
	name: string;
	chessProfileUrl?: string;
	elo: number;
	imageUrl?: string;
};

export type TypePlayer = {
	id: string;
	name: string;
	chessProfileUrl?: string;
	elo: number;
	imageUrl?: string;
};

export const isNewImage = (
	currentPlayer: TypePlayerToCreate,
	player?: TypePlayer,
): currentPlayer is TypePlayerToCreate & { imageUrl: string } => {
	if (!player) return false;

	return !!(
		currentPlayer.imageUrl && player.imageUrl !== currentPlayer.imageUrl
	);
};

export type TypeUseCreatePlayerForm = ReturnType<typeof useCreatePlayerForm>;
