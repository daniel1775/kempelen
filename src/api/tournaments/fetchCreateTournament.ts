import {
	getFirestore,
	addDoc,
	collection,
} from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';

import type { TypeTournamentToCreate } from '@/src/types/tournament';

export const fetchCreateTournament = async (tournamentToCreate: TypeTournamentToCreate) => {
	try {
		const db = getFirestore();
		const deviceId = await DeviceInfo.getUniqueId();

		const tournamentRef = collection(db, 'tournaments');

		await addDoc(tournamentRef, {
			title: tournamentToCreate.title,
			rounds_number: tournamentToCreate.roundsNumber,
			tiebreak: tournamentToCreate.tiebreak,
			score_byes: tournamentToCreate.scoreByes,
			description: tournamentToCreate.description,
			image: tournamentToCreate.image ?? '',
			status: 'not-started',
			device_id: deviceId,
		});
	} catch (err) {
		console.error('[fetchCreateTournament] error: ', err);
	}
};
