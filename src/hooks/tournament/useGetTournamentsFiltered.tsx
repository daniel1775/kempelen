import { useMemo } from 'react';

import type { TypeTournament } from '@/src/types/tournament';

type TypeUseGetTournamentsFiltered = {
	allTournamentsData?: TypeTournament[];
};

export const useGetTournamentsFiltered = ({
	allTournamentsData,
}: TypeUseGetTournamentsFiltered) => {
	const currentTournaments = useMemo(() => {
		return (
			allTournamentsData?.filter(
				(tournament) => tournament.status !== 'finished',
			) || []
		);
	}, [allTournamentsData]);

	const finishedTournaments = useMemo(() => {
		return (
			allTournamentsData?.filter(
				(tournament) => tournament.status === 'finished',
			) || []
		);
	}, [allTournamentsData]);

	return {
		currentTournaments,
		finishedTournaments,
	};
};
