import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';

import type { TypeTournament } from '@/src/types/tournament';

export const fetchAllTournaments = async () => {
	try {
		const db = getFirestore();
		const deviceId = await DeviceInfo.getUniqueId();

		const tournamentsCollection = query(
			collection(db, 'tournaments'),
			where('device_id', '==', deviceId),
		);
		const querySnapshot = await getDocs(tournamentsCollection);

		const allTournaments = querySnapshot.docs.map((doc: any) => {
			const docData = doc.data();

			const response: TypeTournament = {
				id: doc.id,
				deviceId: docData?.device_id,
				name: docData?.name,
				roundsNumber: docData?.rounds_number,
				tiebreaks: docData?.tiebreak,
				scoreByes: docData?.score_byes,
				description: docData?.description,
				image: docData?.image,
				status: docData?.status,
				rounds: docData?.rounds,
				players: docData?.players,
			};

			return response;
		});

		return allTournaments as TypeTournament[];
	} catch (err) {
		console.error('[fetchAllTournaments] error: ', err);

		return [];
	}
};
