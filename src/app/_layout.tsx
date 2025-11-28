import '@/src/global.css';
import 'react-native-reanimated';

import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
	return (
		<>
			<StatusBar style='auto' />
			<Tabs>
				<Tabs.Screen
					name='index'
					options={{
						headerShown: false,
						tabBarLabel: 'tournament',
					}}
				/>
				<Tabs.Screen
					name='player/index'
					options={{
						headerShown: false,
					}}
				/>
				<Tabs.Screen
					name='tournament'
					options={{
						href: null,
						headerShown: false,
					}}
				/>
			</Tabs>
		</>
	);
}
