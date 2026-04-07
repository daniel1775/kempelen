import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchEditTournament } from '@/src/api/tournaments/fetchEditTournament';

import type { TypeTournamentToCreate } from '@/src/types/tournament';

type TypeMutationFetchEditTournament = Partial<TypeTournamentToCreate> & {
	tournamentId: string;
};

export const useEditTournament = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async ({
			tournamentId,
			...tournamentToEdit
		}: TypeMutationFetchEditTournament) => {
			return fetchEditTournament(tournamentId, tournamentToEdit);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['allTournaments'] });
		},
	});

	return mutation;
};
