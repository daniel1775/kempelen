import { Stack, usePathname } from 'expo-router';

export default function PlayerLayout() {
	const pathname = usePathname();

	return (
		<Stack
			screenOptions={{
				headerShown: false,
				animation: 'fade',
			}}
		/>
	);
}
