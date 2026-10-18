import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postCreatePlayer } from '@/src/api-v2/players/postCreatePlayer';

import type { TypePlayerToCreate } from '@/src/types/player';

export const useCreatePlayer = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (playerToCreate: TypePlayerToCreate) => {
            return postCreatePlayer(playerToCreate);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['allPlayers'] });
        },
    });

    return mutation;
};
