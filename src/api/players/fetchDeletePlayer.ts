import { getFirestore, deleteDoc, doc } from '@react-native-firebase/firestore';

type TypeFetchDeletePlayer = {
	playerId: string;
};

export const fetchDeletePlayer = async ({
	playerId,
}: TypeFetchDeletePlayer) => {
	try {
		const db = getFirestore();
		const playerRef = doc(db, 'players', playerId);

		await deleteDoc(playerRef);
	} catch (err) {
		console.error('[fetchDeletePlayer] error: ', err);
	}
};
