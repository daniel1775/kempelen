import DeviceInfo from 'react-native-device-info';

import { api } from '@/src/utils/axios';

import type { TypePlayerToCreate } from '@/src/types/player';

export const postCreatePlayer = async (playerToCreate: TypePlayerToCreate) => {
    const deviceId = await DeviceInfo.getUniqueId();

    const res = await api.post('players', {
        name: playerToCreate.name,
        elo: playerToCreate.elo,
        image_url: playerToCreate.imageUrl || null,
        chess_profile: playerToCreate.chessProfileUrl || null,
        device_id: deviceId,
    });

    return res.data;
};
