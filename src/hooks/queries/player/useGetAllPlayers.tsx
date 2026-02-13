import { useQuery } from '@tanstack/react-query';

import { fetchAllPlayers } from '@/api/players/fetchAllPlayers';

export const useGetAllPlayers = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['allPlayers'],
		queryFn: async () => {
			const response = await fetchAllPlayers();
			return response;
		},
		staleTime: 1000 * 60 * 60,
	});

	return { allPlayersData: data, isLoading, error };
};
