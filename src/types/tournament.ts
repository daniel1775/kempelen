import { useCreateTournamentForm } from '@/src/hooks/form/tournament/useCreateTournamentForm';

export type TypeTournament = {
	id: string;
	deviceId: string;
	title: string;
	roundsNumber: number;
	tiebreak: string;
	scoreByes: string;
	description: string;
	image: string;
	status: 'playing' | 'finished' | 'not-started';
};

export type TypeTournamentToCreate = {
	title: string;
	roundsNumber: number;
	tiebreak: string;
	scoreByes: string;
	description: string;
	image?: string;
};

export type TypeFormTournamentFieldsName =
	| 'title'
	| 'roundsNumber'
	| 'tiebreak'
	| 'scoreByes'
	| 'description'
	| 'image';

export type TypeUseCreateTournamentForm = ReturnType<
	typeof useCreateTournamentForm
>;
