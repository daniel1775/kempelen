import { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { useGetSingleTournament } from '@/src/hooks/queries/tournament/useGetSingleTournament';

import TournamentHeader from '@/src/UI/molecules/tournament/TournamentHeader';
import TournamentInfo from '@/src/UI/organisms/tournament/TournamentInfo';
import TournamentTabs from '@/src/UI/molecules/tournament/TournamentTabs';

import type { TypeSingleTournamentParams } from '@/src/types/navigation';

export default function SingleTournament() {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState<'rounds' | 'standings'>(
		'standings',
	);

	const { tournamentId } = useLocalSearchParams<TypeSingleTournamentParams>();

	const { singleTournamentData } = useGetSingleTournament(tournamentId);

	return (
		<ScrollView className='flex-1 bg-gray'>
			<TournamentHeader imageUrl={singleTournamentData?.image || ''} />

			<TournamentInfo
				title={singleTournamentData?.title || ''}
				description={singleTournamentData?.description || ''}
				status={singleTournamentData?.status || ''}
				onEdit={() => console.log('Edit pressed')}
				onDelete={() => console.log('Delete pressed')}
				onMoreInfo={() => console.log('More info pressed')}
			/>

			<View className='px-6'>
				<TournamentTabs
					activeTab={activeTab}
					onTabChange={setActiveTab}
				/>

				<View className='mt-8 mb-10'>
					{activeTab === 'rounds' ? (
						<Text className='text-light-gray text-center text-lg italic'>
							{t('roundsContentPlaceholder')}
						</Text>
					) : (
						<Text className='text-light-gray text-center text-lg italic'>
							{t('standingsContentPlaceholder')}
						</Text>
					)}
				</View>
			</View>
		</ScrollView>
	);
}
