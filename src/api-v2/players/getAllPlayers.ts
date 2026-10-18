import DeviceInfo from 'react-native-device-info';

import { api } from '@/src/utils/axios';

export const getAllPlayers = async () => {
    const deviceId = await DeviceInfo.getUniqueId();
    const res = await api.get(`players?device_id=${deviceId}`);

    return res.data;
};
