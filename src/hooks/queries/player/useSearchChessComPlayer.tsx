import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchSearchPlayer } from '@/src/api/chess-com/fetchSearchPlayer';

export const useSearchChessComPlayer = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (chessProfile: string) => {
			return fetchSearchPlayer(chessProfile.trim());
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['searchChessComPlayer'] });
		},
	});

	return mutation;
};
