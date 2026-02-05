import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';

import type { TypePlayer } from '@/types/player';

export const fetchAllPlayers = async () => {
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

		const allPlayers = snapshot.docs.map((doc) => {
			const docData = doc.data();

			return {
				id: doc.id,
				name: docData.name,
				chessProfile: docData.chess_profile,
				elo: docData.elo,
				imageUrl: docData.image_url,
			};
		});

		return allPlayers as TypePlayer[];
	} catch (err) {
		console.error('[fetchAllPlayers] error: ', err);

		return [];
	}
};
