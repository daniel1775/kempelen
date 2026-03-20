import { Stack } from 'expo-router';

import Header from '@/src/UI/layouts/Header';

export default function TournamentLayout() {
	return (
		<Stack screenOptions={{}}>
			<Stack.Screen
				name='index'
				options={{
					header: () => <Header isEmpty />,
					headerShown: true,
				}}
			/>
			<Stack.Screen
				name='create-tournament'
				options={{
					header: () => <Header isEmpty />,
					headerShown: true,
				}}
			/>
		</Stack>
	);
}
