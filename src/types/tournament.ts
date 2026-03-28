export type TypeTournament = {
	deviceId: string;
	name: string;
	roundsNumber: number;
	tiebreak: string;
	scoreByes: string;
	description: string;
	image: string;
	status: 'playing' | 'finished' | 'not-started';
};
