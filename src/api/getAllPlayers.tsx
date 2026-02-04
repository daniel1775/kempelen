import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';

import type { TypePlayer } from '@/types/player';

export const getAllPlayers = async () => {
	try {
		const deviceId = await DeviceInfo.getUniqueId();

		const allPlayersRef = firestore().collection('players');
		const snapshot = await allPlayersRef
			.where('device_id', '==', deviceId)
			.get();

		if (snapshot.empty) {
			return [];
		}

		/* const prototype = Object.getPrototypeOf(snapshot);
		console.log(Object.getOwnPropertyNames(prototype)); */

		const allPlayers = snapshot.docs.map((doc) => doc.data());

		return allPlayers as TypePlayer[];
	} catch (err) {
		console.error('[getAllPlayers] error: ', err);

		return [];
	}
};
