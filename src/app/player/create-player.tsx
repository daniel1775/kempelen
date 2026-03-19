import { useGlobalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { fetchSinglePlayer } from '@/api/players/fetchSinglePlayer';

import RadioButton from '@/src/UI/atoms/buttons/RadioButton';
import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import CreatePlayerForm from '@/src/UI/organisms/player/CreatePlayerForm';

import type { TypePlayer } from '@/src/types/player';

export default function CreatePlayer() {
	const params = useGlobalSearchParams();
	const { t } = useTranslation();

	const [creationType, setCreationType] = useState<'manual' | 'online'>(
		'manual',
	);
	const [playerToCreate, setPlayerToCreate] = useState<TypePlayer | null>(null);

	useEffect(() => {
		const fetchPlayer = async () => {
			if (!params?.playerId) return;

			const singlePlayer = await fetchSinglePlayer({
				playerId: String(params?.playerId),
			});
			if (!singlePlayer) return;

			setPlayerToCreate(singlePlayer);
		};

		fetchPlayer();
	}, [params]);

	return (
		<ScreenLayout title={t('createPlayer')}>
			<ScrollView>
				<View className='flex-1 mt-16 gap-4 mb-12 px-4'>
					<RadioButton
						label={t('manually')}
						onPress={() => {
							setCreationType('manual');
						}}
						isActive={creationType === 'manual'}
					/>
					<RadioButton
						label={t('linkedWithChessCom')}
						onPress={() => {
							setCreationType('online');
						}}
						isActive={creationType === 'online'}
					/>
				</View>
				<CreatePlayerForm
					kindPlayer={creationType}
					playerToEdit={playerToCreate}
				/>
			</ScrollView>
		</ScreenLayout>
	);
}
