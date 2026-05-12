import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import ScreenLayout from '@/src/UI/layouts/ScreenLayout';

export default function StatisticsIndex() {
	const { t } = useTranslation();

	return (
		<ScreenLayout title={t('settings')}>
			<></>
		</ScreenLayout>
	);
}
