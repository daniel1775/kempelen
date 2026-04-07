import { doc, getFirestore, updateDoc } from '@react-native-firebase/firestore';

import type { TypeTournamentToCreate } from '@/src/types/tournament';

export const fetchEditTournament = async (
	tournamentId: string,
	tournamentToEdit: Partial<TypeTournamentToCreate>,
) => {
	try {
		const db = getFirestore();
		const tournamentRef = doc(db, 'tournaments', tournamentId);

		const dataToUpdate: any = {};
		if (tournamentToEdit.title !== undefined) dataToUpdate.title = tournamentToEdit.title;
		if (tournamentToEdit.roundsNumber !== undefined) dataToUpdate.rounds_number = tournamentToEdit.roundsNumber;
		if (tournamentToEdit.tiebreak !== undefined) dataToUpdate.tiebreak = tournamentToEdit.tiebreak;
		if (tournamentToEdit.scoreByes !== undefined) dataToUpdate.score_byes = tournamentToEdit.scoreByes;
		if (tournamentToEdit.description !== undefined) dataToUpdate.description = tournamentToEdit.description;
		if (tournamentToEdit.image !== undefined) dataToUpdate.image = tournamentToEdit.image;

		await updateDoc(tournamentRef, dataToUpdate);
	} catch (err) {
		console.error('[fetchEditTournament] error: ', err);
	}
};
