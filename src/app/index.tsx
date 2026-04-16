import { View } from 'react-native';

import Header from '@/src/UI/layouts/Header';
import ScreenLayout from '@/src/UI/layouts/ScreenLayout';

export default function Home() {
	return (
		<>
			<Header isEmpty />
			<ScreenLayout title='Home'>
				<View></View>
			</ScreenLayout>
		</>
	);
}
