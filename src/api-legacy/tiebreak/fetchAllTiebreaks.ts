import { TypeTiebreak } from '@/src/types/tiebreak';
import {
	collection,
	getDocs,
	getFirestore,
	query,
} from '@react-native-firebase/firestore';

export const fetchAllTiebreaks = async () => {
	try {
		const db = getFirestore();
		const tiebreaksCollection = query(collection(db, 'tiebreak'));
		const querySnapshot = await getDocs(tiebreaksCollection);

		const allTiebreaks = querySnapshot.docs.map((doc: any) => {
			const docData = doc.data();

			return {
				id: doc.id,
				name: docData?.name,
				description: '',
			};
		});

		return allTiebreaks as TypeTiebreak[];
	} catch (err) {
		console.error('[fetchAllTiebreaks] error: ', err);
	}
};
