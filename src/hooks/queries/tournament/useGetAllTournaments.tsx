import { useQuery } from '@tanstack/react-query';

import { fetchAllTournaments } from '@/src/api/tournaments/fetchAllTournaments';

export const useGetAllTournaments = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['allTournaments'],
		queryFn: async () => {
			const response = await fetchAllTournaments();
			return response;
		},
		staleTime: 1000 * 60 * 60,
	});

	return { allTournamentsData: data, isLoading, isError };
};
