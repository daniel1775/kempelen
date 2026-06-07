import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import ListTournaments from '@/src/UI/organisms/tournament/ListTournaments';
import CustomButton from '@/src/UI/atoms/buttons/CustomButton';

export default function Tournament() {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<ScreenLayout title={t('tournaments')}>
			<ListTournaments />

			<View className='absolute z-20 bottom-6 right-6'>
				<CustomButton
					variant='add'
					onPress={() => {
						router.push('/tournament/create-tournament');
					}}
				/>
			</View>
		</ScreenLayout>
	);
}
