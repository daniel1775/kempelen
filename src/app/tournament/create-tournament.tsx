import { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { useGetSingleTournament } from '@/src/hooks/queries/tournament/useGetSingleTournament';

import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import CreateTournamentForm from '@/src/UI/organisms/tournament/CreateTournamentForm';
import TabBar from '@/src/UI/molecules/tab-bar/TabBar';
import AddPlayers from '@/src/UI/organisms/tournament/AddPlayers';

import SettingsIcon from '@/assets/svg/Settings';
import PlayerIcon from '@/assets/svg/Player';

import type { TypeCreateTournamentParams } from '@/src/types/navigation';
import type { TypeTabBarItem } from '@/src/types/tournament';

export default function CreateTournament() {
	const [activeTab, setActiveTab] = useState<string>('settings');

	const { t } = useTranslation();
	const { tournamentId } = useLocalSearchParams<TypeCreateTournamentParams>();
	const router = useRouter();

	const { singleTournamentData } = useGetSingleTournament(tournamentId);

	const tabItems: TypeTabBarItem[] = [
		{
			key: 'settings',
			label: t('settings'),
			icon: (props) => <SettingsIcon {...props} />,
			isDisabled: true,
		},
		{
			key: 'players',
			label: t('players'),
			icon: (props) => <PlayerIcon {...props} />,
			isDisabled: true,
		},
	];

	return (
		<ScreenLayout isHeaderShown>
			<View className='mb-10 flex-row justify-center'>
				<TabBar
					items={tabItems}
					activeKey={activeTab}
					onChange={setActiveTab}
				/>
			</View>
			{activeTab === 'settings' && (
				<CreateTournamentForm
					onSubmit={() => {
						setActiveTab('players');
					}}
					tournamentToEdit={singleTournamentData}
				/>
			)}
			{activeTab === 'players' && (
				<AddPlayers
					onBack={() => {
						setActiveTab('settings');
					}}
					onAddPlayers={() => {
						router.navigate({
							pathname: '/player/select-players',
							params: {
								tournamentId,
								isFromTournament: 1,
							},
						});
					}}
					onDone={() => {}}
				/>
			)}
		</ScreenLayout>
	);
}
