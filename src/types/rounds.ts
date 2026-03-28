export type TypeRound = {
	id: string;
	number: number;
	winner: 'black' | 'white' | 'draw';
	status: 'playing' | 'finished' | 'not-started';
};
