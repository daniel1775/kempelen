import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import ScreenLayout from '@/src/UI/layouts/ScreenLayout';

export default function Player() {
	const { t } = useTranslation();

	return (
		<ScreenLayout title={t('players')}>
			<View></View>
		</ScreenLayout>
	);
}
