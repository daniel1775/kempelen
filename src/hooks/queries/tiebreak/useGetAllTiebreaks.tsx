import { useQuery } from '@tanstack/react-query';

import { fetchAllTiebreaks } from '@/src/api/tiebreak/fetchAllTiebreaks';

export const useGetAllTiebreaks = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['allTiebreaks'],
		queryFn: async () => {
			const response = await fetchAllTiebreaks();
			return response;
		},
		staleTime: 1000 * 60 * 60 * 24,
	});

	return { allTiebreaksData: data, isLoading, error };
};
