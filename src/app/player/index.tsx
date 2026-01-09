import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';

import PlayerOneImage from '@/images/tests-images/player-1.png';
import PlayerTwoImage from '@/images/tests-images/player-2.png';
import CustomButton from '@/src/UI/atoms/buttons/CustomButton';
import SearchInput from '@/src/UI/atoms/input/SearchInput';
import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import PlayerCard from '@/src/UI/molecules/player/PlayerCard';

export default function Player() {
	const { t } = useTranslation();

	const [searchText, setSearchText] = useState('');

	const dummyPlayers = [
		{
			playerName: 'Magnus Carlsen',
			playerElo: 2862,
			imageUrl: PlayerOneImage,
		},
		{
			playerName: 'Hikaru Nakamura',
			playerElo: 2787,
			imageUrl: PlayerTwoImage,
		},
	];

	return (
		<ScreenLayout title={t('players')}>
			<View className='px-6'>
				<SearchInput
					value={searchText}
					setValue={setSearchText}
					containerStyle='mt-16 mb-12'
				/>
				<FlatList
					data={dummyPlayers}
					keyExtractor={(_, index) => index.toString()}
					renderItem={({ item }) => (
						<PlayerCard
							playerName={item.playerName}
							playerElo={item.playerElo}
							imageUrl={item.imageUrl}
						/>
					)}
					ItemSeparatorComponent={() => <View className='h-6' />}
				/>
			</View>
			<View className='absolute z-20 bottom-6 right-6'>
				<CustomButton text='Create Player' />
			</View>
		</ScreenLayout>
	);
}
