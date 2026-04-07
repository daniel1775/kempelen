import { getFirestore, deleteDoc, doc } from '@react-native-firebase/firestore';

type TypeFetchDeleteTournament = {
	tournamentId: string;
};

export const fetchDeleteTournament = async ({
	tournamentId,
}: TypeFetchDeleteTournament) => {
	try {
		const db = getFirestore();
		const tournamentRef = doc(db, 'tournaments', tournamentId);

		await deleteDoc(tournamentRef);
	} catch (err) {
		console.error('[fetchDeleteTournament] error: ', err);
	}
};
