import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';

import type { TypePlayer } from '@/types/player';

export const fetchAllPlayers = async () => {
	try {
		const db = getFirestore();
		const deviceId = await DeviceInfo.getUniqueId();

		const playersCollection = query(
			collection(db, 'players'),
			where('device_id', '==', deviceId),
		);
		const querySnapshot = await getDocs(playersCollection);

		const allPlayers = querySnapshot.docs.map((doc: any) => {
			const docData = doc.data();

			return {
				id: doc.id,
				name: docData?.name,
				chessProfile: docData?.chess_profile,
				elo: docData?.elo,
				imageUrl: docData?.image_url,
			};
		});

		return allPlayers as TypePlayer[];
	} catch (err) {
		console.error('[fetchAllPlayers] error: ', err);

		return [];
	}
};
