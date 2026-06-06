import { useQuery } from '@tanstack/react-query';

import { fetchAllTiebreaks } from '@/src/api/tiebreak/fetchAllTiebreaks';

export const useGetAllTiebreaks = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['allTiebreaks'],
		queryFn: async () => {
			const response = await fetchAllTiebreaks();
			return response;
		},
	});

	return { allTiebreaksData: data, isLoading, error };
};
