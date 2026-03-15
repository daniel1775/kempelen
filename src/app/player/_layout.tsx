import { Stack } from 'expo-router';
import Header from '@/src/UI/layouts/Header';

export default function PlayerLayout() {
	return (
		<Stack
			screenOptions={{
				animation: 'none',
			}}
		>
			<Stack.Screen
				name='index'
				options={{
					header: () => <Header isEmpty />,
					headerShown: true,
				}}
			/>
			<Stack.Screen
				name='create-player'
				options={{
					header: () => <Header />,
					headerShown: true,
				}}
			/>
		</Stack>
	);
}
