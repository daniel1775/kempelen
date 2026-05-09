import { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { useGetSingleTournament } from '@/src/hooks/queries/tournament/useGetSingleTournament';
import { useDeleteTournament } from '@/src/hooks/queries/tournament/useDeleteTournament';

import TournamentHeader from '@/src/UI/molecules/tournament/TournamentHeader';
import TournamentInfo from '@/src/UI/organisms/tournament/TournamentInfo';
import TournamentTabs from '@/src/UI/molecules/tournament/TournamentTabs';
import ModalConfirmation from '@/src/UI/molecules/modal/ModalConfirmation';

import type { TypeSingleTournamentParams } from '@/src/types/navigation';

export default function SingleTournament() {
	const { t } = useTranslation();

	const router = useRouter();
	const { tournamentId } = useLocalSearchParams<TypeSingleTournamentParams>();

	const [activeTab, setActiveTab] = useState<'rounds' | 'standings'>(
		'standings',
	);
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

	const { singleTournamentData } = useGetSingleTournament(tournamentId);
	const { mutateAsync: deleteTournament } = useDeleteTournament();

	const handleDeleteTournament = async () => {
		await deleteTournament(tournamentId);
		setIsDeleteModalVisible(false);
		router.back();
	};

	return (
		<ScrollView className='flex-1 bg-gray'>
			<ModalConfirmation
				visible={isDeleteModalVisible}
				title={t('deleteTournament')}
				message={t('areYouSureDeleteTournament')}
				onCancel={() => setIsDeleteModalVisible(false)}
				onConfirm={handleDeleteTournament}
			/>

			<TournamentHeader imageUrl={singleTournamentData?.image || ''} />
			<TournamentInfo
				title={singleTournamentData?.title || ''}
				description={singleTournamentData?.description || ''}
				status={singleTournamentData?.status || ''}
				onEdit={() =>
					router.push({
						pathname: '/tournament/create-tournament',
						params: { tournamentId },
					})
				}
				onDelete={() => setIsDeleteModalVisible(true)}
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
