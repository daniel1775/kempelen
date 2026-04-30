import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLocalSearchParams } from 'expo-router';

import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import CreateTournamentForm from '@/src/UI/organisms/tournament/CreateTournamentForm';

import type { TypeCreateTournamentParams } from '@/src/types/navigation';
import { useGetSingleTournament } from '@/src/hooks/queries/tournament/useGetSingleTournament';

export default function CreateTournament() {
	const { t } = useTranslation();
	const { tournamentId } = useLocalSearchParams<TypeCreateTournamentParams>();

	const { singleTournamentData } = useGetSingleTournament(tournamentId);

	return (
		<ScreenLayout title={t('initialSettings')}>
			<ScrollView>
				<View className='mt-16' />
				<CreateTournamentForm />
			</ScrollView>
		</ScreenLayout>
	);
}
