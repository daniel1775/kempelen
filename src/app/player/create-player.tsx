import { useGlobalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { fetchSinglePlayer } from '@/src/api/fetchSinglePlayer';

import RadioButton from '@/src/UI/atoms/buttons/RadioButton';
import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import CreatePlayerForm from '@/src/UI/organisms/player/CreatePlayerForm';

import type { TypePlayer } from '@/src/types/player';

export default function CreatePlayer() {
	const params = useGlobalSearchParams();

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
		<ScreenLayout title='Create Player'>
			<ScrollView>
				<View className='flex-1 mt-16 gap-4 mb-12 px-4'>
					<RadioButton
						label='Manually'
						onPress={() => {
							setCreationType('manual');
						}}
						isActive={creationType === 'manual'}
					/>
					<RadioButton
						label='Linked with Chess.com'
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
