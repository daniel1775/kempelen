import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchCreatePlayer } from '@/src/api/players/fetchCreatePlayer';

import type { TypePlayerToCreate } from '@/src/types/player';

export const useCreatePlayer = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (playerToCreate: TypePlayerToCreate) => {
			const response = await fetchCreatePlayer(playerToCreate);
			return response;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['allPlayers'] });
		},
	});

	return mutation;
};
