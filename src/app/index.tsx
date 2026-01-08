import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from 'expo-router';
import { Text, View } from 'react-native';

export default function Tournament() {
	useFocusEffect(() => {
		const fetchTournaments = async () => {
			const tournamentsSnapshot = await firestore()
				.collection('tournaments')
				.get();

			const tournaments = tournamentsSnapshot.docs.map((doc) =>
				doc.data()
			);

			console.log('Tournaments: ', tournaments);
		};

		// fetchTournaments();
	});

	return (
		<View className='flex-1 justify-center items-center bg-gray'>
			<Text>Tournament screen</Text>
		</View>
	);
}
