import { doc, getFirestore, updateDoc } from '@react-native-firebase/firestore';

import type { TypePlayerToCreate } from '@/types/player';

export const fetchEditPlayer = async (
	playerId: string,
	playerToEdit: Partial<TypePlayerToCreate>,
) => {
	try {
		const db = getFirestore();

		const playerRef = doc(db, 'players', playerId);
		await updateDoc(playerRef, {
			elo: playerToEdit.elo,
			name: playerToEdit.name,
			chess_profile: playerToEdit.chessProfileUrl ?? '',
			image_url: playerToEdit.imageUrl ?? '',
		});
	} catch (err) {
		console.error('[fetchEditPlayer] error: ', err);
	}
};
