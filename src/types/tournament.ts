import { useCreateTournamentForm } from '@/src/hooks/form/tournament/useCreateTournamentForm';

import type { TypeTiebreak } from '@/types/tiebreak';
import type { TypeRound } from '@/types/rounds';
import type { ReactNode } from 'react';

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
	players: Array<{ player_id: string }>;
};

export type TypeTournamentToCreate = {
	name: string;
	roundsNumber: number;
	tiebreaks: TypeTiebreak[];
	scoreByes: string;
	description: string;
	image?: string;
};

export type TypeTabBarItem = {
	key: string;
	label: string;
	icon?: (props: { color: string; width: number; height: number }) => ReactNode;
	isDisabled?: boolean;
};

export type TypeUseCreateTournamentForm = ReturnType<
	typeof useCreateTournamentForm
>;
