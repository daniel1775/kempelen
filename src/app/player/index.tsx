import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

import SearchInput from '@/src/UI/atoms/input/SearchInput';
import ScreenLayout from '@/src/UI/layouts/ScreenLayout';

export default function Player() {
	const { t } = useTranslation();

	const [searchText, setSearchText] = useState('');

	return (
		<ScreenLayout title={t('players')}>
			<View className='px-6'>
				<SearchInput
					value={searchText}
					setValue={setSearchText}
					containerStyle='mt-16'
				/>
				<ScrollView></ScrollView>
			</View>
		</ScreenLayout>
	);
}
