import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchDeletePlayer } from '@/src/api/players/fetchDeletePlayer';

export const useDeletePlayer = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (playerId: string) => {
			return fetchDeletePlayer({ playerId });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['allPlayers'] });
		},
	});

	return mutation;
};
