import { doc, getDoc, getFirestore } from '@react-native-firebase/firestore';

import type { TypePlayer } from '@/types/player';

type TypeGetSinglePlayer = {
	playerId: string;
};

export const getSinglePlayer = async ({ playerId }: TypeGetSinglePlayer) => {
	try {
		const db = getFirestore();

		const allPlayersRef = doc(db, 'players', playerId);
		const snapshot = await getDoc(allPlayersRef);

		if (!snapshot.exists()) {
			return null;
		}

		const unformattedPlayer = snapshot.data();

		const singlePlayer = {
			id: snapshot.id,
			name: unformattedPlayer?.name,
			chessProfile: unformattedPlayer?.chess_profile,
			elo: unformattedPlayer?.elo,
			imageUrl: unformattedPlayer?.image_url,
		};

		return singlePlayer as TypePlayer;
	} catch (err) {
		console.error('[getAllPlayers] error: ', err);

		return null;
	}
};
