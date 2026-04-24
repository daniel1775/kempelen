import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import CreateTournamentForm from '@/src/UI/organisms/tournament/CreateTournamentForm';

export default function CreateTournament() {
	const { t } = useTranslation();

	return (
		<ScreenLayout title={t('initialSettings')}>
			<ScrollView>
				<View className='mt-16' />
				<CreateTournamentForm />
			</ScrollView>
		</ScreenLayout>
	);
}
