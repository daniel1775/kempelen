import { Stack } from 'expo-router';

import Header from '@/src/UI/layouts/Header';

export default function SettingsLayout() {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					header: () => <Header isEmpty />,
					headerShown: true,
				}}
			/>
		</Stack>
	);
}
