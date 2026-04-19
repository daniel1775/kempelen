import { useQuery } from '@tanstack/react-query';

import { fetchSingleTournament } from '@/src/api/tournaments/fetchSingleTournament';

export const useGetSingleTournament = (tournamentId: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['singleTournament', tournamentId],
		queryFn: async () => {
			const response = await fetchSingleTournament({ tournamentId });
			return response;
		},
		staleTime: 1000 * 60 * 60,
	});

	return { singleTournamentData: data, isLoading, isError };
};
