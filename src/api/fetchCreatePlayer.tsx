import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';

import type { TypePlayerToCreate } from '@/types/player';

export const fetchCreatePlayer = async (playerToCreate: TypePlayerToCreate) => {
	try {
		const deviceId = await DeviceInfo.getUniqueId();

		firestore()
			.collection('players')
			.add({
				name: playerToCreate.name,
				elo: playerToCreate.elo,
				image_url: playerToCreate.imageUrl ?? '',
				chess_profile: playerToCreate.chessProfileUrl ?? '',
				device_id: deviceId,
			});
	} catch (err) {
		console.error('[fetchCreatePlayer] error: ', err);
	}
};
