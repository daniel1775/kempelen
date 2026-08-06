import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLocalSearchParams } from 'expo-router';

import { useGetSingleTournament } from '@/src/hooks/queries/tournament/useGetSingleTournament';

import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import CreateTournamentForm from '@/src/UI/organisms/tournament/CreateTournamentForm';
import TabBar, { TabBarItem } from '@/src/UI/molecules/tab-bar/TabBar';

import SettingsIcon from '@/assets/svg/Settings';
import PlayerIcon from '@/assets/svg/Player';

import type { TypeCreateTournamentParams } from '@/src/types/navigation';

export default function CreateTournament() {
	const { t } = useTranslation();
	const { tournamentId } = useLocalSearchParams<TypeCreateTournamentParams>();

	const { singleTournamentData } = useGetSingleTournament(tournamentId);

	const [activeTab, setActiveTab] = useState<string>('settings');

	const tabItems: TabBarItem[] = [
		{
			key: 'settings',
			label: t('settings'),
			icon: (props) => <SettingsIcon {...props} />,
		},
		{
			key: 'players',
			label: t('players'),
			icon: (props) => <PlayerIcon {...props} />,
		},
	];

	return (
		<ScreenLayout>
			<View className='mt-8 mb-10 flex-row justify-center'>
				<TabBar
					items={tabItems}
					activeKey={activeTab}
					onChange={setActiveTab}
				/>
			</View>
			<ScrollView>
				{activeTab === 'settings' && (
					<CreateTournamentForm tournamentToEdit={singleTournamentData} />
				)}
			</ScrollView>
		</ScreenLayout>
	);
}
