import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchDeleteTournament } from '@/src/api/tournaments/fetchDeleteTournament';

export const useDeleteTournament = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (tournamentId: string) => {
			return fetchDeleteTournament({ tournamentId });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['allTournaments'] });
		},
	});

	return mutation;
};
