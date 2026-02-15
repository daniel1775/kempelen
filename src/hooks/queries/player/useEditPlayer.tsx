import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchEditPlayer } from '@/src/api/players/fetchEditPlayer';
import { TypePlayerToCreate } from '@/src/types/player';

export const useEditPlayer = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (
			playerToEdit: Partial<TypePlayerToCreate> & { playerId: string },
		) => {
			return fetchEditPlayer(playerToEdit.playerId, playerToEdit);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['allPlayers'] });
		},
	});

	return mutation;
};
