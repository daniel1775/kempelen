import { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';

import SearchInput from '@/UI/atoms/input/SearchInput';
import CustomButton from '@/UI/atoms/buttons/CustomButton';
import TextBase from '@/UI/atoms/text/TextBase';
import PlayerCardLite from '@/UI/molecules/player/PlayerCardLite';

const AddPlayers = () => {
	const [searchText, setSearchText] = useState('');
	const [playersData, setPlayersData] = useState([]);

	const { t } = useTranslation();
	const router = useRouter();

	return (
		<View className='flex-1 h-full'>
			<SearchInput
				value={searchText}
				setValue={setSearchText}
				containerStyle='mb-12'
				placeholder={t('searchPlayer')}
			/>
			{playersData.length < 1 ? (
				<View className='flex items-center mt-16'>
					<TextBase>{t('noPlayersFound')}</TextBase>
				</View>
			) : (
				<View></View>
			)}
			<View className='absolute z-20 bottom-6 right-0'>
				<CustomButton
					variant='add'
					onPress={() => {
						router.navigate('/player');
					}}
				/>
			</View>
		</View>
	);
};

export default AddPlayers;
