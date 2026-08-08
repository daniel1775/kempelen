import { Stack } from 'expo-router';

import { useGetAllTiebreaks } from '@/src/hooks/queries/tiebreak/useGetAllTiebreaks';

export default function TournamentLayout() {
	useGetAllTiebreaks();

	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='single-tournament'
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='create-tournament'
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
