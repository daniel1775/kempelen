import { useCreatePlayerForm } from '@/hooks/form/player/useCreatePlayerForm';

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

export type TypeFormPlayerFieldsName =
	| 'name'
	| 'chessProfileUrl'
	| 'elo'
	| 'imageUrl';

export type TypeUseCreatePlayerForm = ReturnType<typeof useCreatePlayerForm>;

export type TypeKindPlayer = 'manual' | 'online';
