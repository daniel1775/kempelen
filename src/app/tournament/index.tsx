import firestore from '@react-native-firebase/firestore';
import { useFocusEffect, useRouter } from 'expo-router';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import ListTournaments from '@/src/UI/organisms/tournament/ListTournaments';
import CustomButton from '@/src/UI/atoms/buttons/CustomButton';

export default function Tournament() {
	const { t } = useTranslation();
	const router = useRouter();

	useFocusEffect(() => {
		const fetchTournaments = async () => {
			const tournamentsSnapshot = await firestore()
				.collection('tournaments')
				.get();

			const tournaments = tournamentsSnapshot.docs.map((doc) => doc.data());

			console.log('Tournaments: ', tournaments);
		};

		// fetchTournaments();
	});

	return (
		<ScreenLayout title='Tournaments'>
			<ListTournaments />

			<View className='absolute z-20 bottom-6 right-6'>
				<CustomButton
					variant='add'
					onPress={() => {
						router.navigate('/tournament/create-tournament');
					}}
				/>
			</View>
		</ScreenLayout>
	);
}
