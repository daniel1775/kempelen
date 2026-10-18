import { api } from '@/src/utils/axios';

export const getAllPlayers = async (deviceId: string) => {
    const res = await api.get(`players?device_id=${deviceId}`);

    return res.data;
};
