import { doc, getDoc, getFirestore } from '@react-native-firebase/firestore';

import type { TypeTournament } from '@/src/types/tournament';

type TypeGetSingleTournament = {
	tournamentId: string;
};

export const fetchSingleTournament = async ({ tournamentId }: TypeGetSingleTournament) => {
	try {
		const db = getFirestore();

		const singleTournamentRef = doc(db, 'tournaments', tournamentId);
		const snapshot = await getDoc(singleTournamentRef);

		if (!snapshot.exists()) {
			return null;
		}

		const unformattedTournament = snapshot.data();

		const singleTournament = {
			id: snapshot.id,
			deviceId: unformattedTournament?.device_id,
			title: unformattedTournament?.title,
			roundsNumber: unformattedTournament?.rounds_number,
			tiebreak: unformattedTournament?.tiebreak,
			scoreByes: unformattedTournament?.score_byes,
			description: unformattedTournament?.description,
			image: unformattedTournament?.image ?? '',
			status: unformattedTournament?.status,
		};

		return singleTournament as TypeTournament;
	} catch (err) {
		console.error('[fetchSingleTournament] error: ', err);

		return null;
	}
};
