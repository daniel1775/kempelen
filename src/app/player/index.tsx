import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import CustomButton from '@/src/UI/atoms/buttons/CustomButton';
import SearchInput from '@/src/UI/atoms/input/SearchInput';
import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import ListPlayers from '@/src/UI/organisms/player/ListPlayers';

import type { TypeListPlayersParams } from '@/src/types/navigation';

export default function Player() {
	const router = useRouter();
	const { t } = useTranslation();

	const [searchText, setSearchText] = useState('');

	const { tournamentId } = useLocalSearchParams<TypeListPlayersParams>();

	return (
		<ScreenLayout title={t('players')}>
			<SearchInput
				value={searchText}
				setValue={setSearchText}
				containerStyle='mt-16 mb-12'
				placeholder={t('searchPlayer')}
			/>
			<ListPlayers searchText={searchText.toLocaleLowerCase()} />
			<View className='absolute z-20 bottom-6 right-6'>
				<CustomButton
					variant='add'
					onPress={() => {}}
				/>
			</View>
		</ScreenLayout>
	);
}
