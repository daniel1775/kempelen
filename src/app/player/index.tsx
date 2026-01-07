import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

import PlayerOneImage from '@/images/tests-images/player-1.png';
import PlayerTwoImage from '@/images/tests-images/player-2.png';
import SearchInput from '@/src/UI/atoms/input/SearchInput';
import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import PlayerCard from '@/src/UI/molecules/player/PlayerCard';

export default function Player() {
	const { t } = useTranslation();

	const [searchText, setSearchText] = useState('');

	return (
		<ScreenLayout title={t('players')}>
			<View className='px-6'>
				<SearchInput
					value={searchText}
					setValue={setSearchText}
					containerStyle='mt-16 mb-12'
				/>
				<ScrollView>
					<PlayerCard
						playerName='Magnus Carlsen'
						playerElo={2862}
						imageUrl={PlayerOneImage}
					/>
					<PlayerCard
						playerName='Hikaru Nakamura'
						playerElo={2787}
						imageUrl={PlayerTwoImage}
					/>
				</ScrollView>
			</View>
		</ScreenLayout>
	);
}
