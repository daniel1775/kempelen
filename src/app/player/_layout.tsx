import { Stack } from 'expo-router';

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
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='create-player'
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='select-players'
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
