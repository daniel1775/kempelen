import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchCreateTournament } from '@/src/api/tournaments/fetchCreateTournament';

import type { TypeTournamentToCreate } from '@/src/types/tournament';

export const useCreateTournament = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (tournamentToCreate: TypeTournamentToCreate) => {
			return fetchCreateTournament(tournamentToCreate);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['allTournaments'] });
		},
	});

	return mutation;
};
