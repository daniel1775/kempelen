import { useQuery } from '@tanstack/react-query';
import DeviceInfo from 'react-native-device-info';

import { getAllPlayers } from '@/src/api-v2/players/getAllPlayers';

export const useGetAllPlayers = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['allPlayers'],
        queryFn: async () => {
            const deviceId = await DeviceInfo.getUniqueId();

            const response = await getAllPlayers(deviceId);
            return response;
        },
        staleTime: 1000 * 60 * 60,
    });

    return { allPlayersData: data, isLoading, error };
};
