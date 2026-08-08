import { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';

import SearchInput from '@/UI/atoms/input/SearchInput';
import CustomButton from '@/UI/atoms/buttons/CustomButton';
import TextBase from '@/UI/atoms/text/TextBase';
import PlayerCardLite from '@/UI/molecules/player/PlayerCardLite';

type TypeAddPlayersProps = {
	onSubmit: () => void;
	onBack: () => void;
};

const AddPlayers = ({ onSubmit, onBack }: TypeAddPlayersProps) => {
	const [searchText, setSearchText] = useState('');
	const [playersData, setPlayersData] = useState([]);

	const { t } = useTranslation();
	const router = useRouter();

	return (
		<View className='flex-1 h-full pb-16'>
			<SearchInput
				value={searchText}
				setValue={setSearchText}
				containerStyle='mb-12'
				placeholder={t('searchPlayer')}
			/>
			{playersData.length < 1 ? (
				<View className='flex items-center mt-16 flex-1'>
					<TextBase>{t('noPlayersFound')}</TextBase>
				</View>
			) : (
				<View></View>
			)}
			<View className='flex-row w-full justify-center gap-8'>
				<CustomButton
					text={t('back')}
					onPress={onBack}
				/>
				<CustomButton
					text={t('finish')}
					onPress={onSubmit}
				/>
			</View>
		</View>
	);
};

export default AddPlayers;
