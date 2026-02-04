export type TypePlayerToCreate = {
	name: string;
	chessProfileUrl?: string;
	elo: number;
	imageUri?: string;
};

export type TypePlayer = {
	name: string;
	chessProfile?: string;
	elo: number;
	imageUri?: string;
};
