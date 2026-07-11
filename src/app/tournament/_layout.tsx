import { Stack } from 'expo-router';

import { useGetAllTiebreaks } from '@/src/hooks/queries/tiebreak/useGetAllTiebreaks';

import Header from '@/src/UI/layouts/Header';

export default function TournamentLayout() {
	useGetAllTiebreaks();

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
				name='single-tournament'
				options={{
					header: () => <Header />,
					headerShown: true,
				}}
			/>
			<Stack.Screen
				name='create-tournament'
				options={{
					header: () => <Header />,
					headerShown: true,
				}}
			/>
		</Stack>
	);
}
