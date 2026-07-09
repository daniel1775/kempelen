import { useCreateTournamentForm } from '@/src/hooks/form/tournament/useCreateTournamentForm';

import type { TypeTiebreak } from '@/types/tiebreak';
import type { TypeRound } from '@/types/rounds';

export type TypeTournament = {
	id: string;
	deviceId: string;
	name: string;
	roundsNumber: number;
	tiebreaks: TypeTiebreak[];
	scoreByes: string;
	description: string;
	image: string;
	status: 'playing' | 'finished' | 'not-started';
	rounds: TypeRound[];
};

export type TypeTournamentToCreate = {
	title: string;
	roundsNumber: number;
	tiebreaks: TypeTiebreak[];
	scoreByes: string;
	description: string;
	image?: string;
};

export type TypeUseCreateTournamentForm = ReturnType<
	typeof useCreateTournamentForm
>;
