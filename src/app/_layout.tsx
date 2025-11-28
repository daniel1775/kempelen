import '@/src/global.css';
import 'react-native-reanimated';

import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import { Dimensions, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { height: screenHeight } = Dimensions.get('window');
const BASE_RATIO = 0.05;
const MIN_HEIGHT = 46;

export default function Layout() {
	const insets = useSafeAreaInsets();
	const calculated = Math.max(
		MIN_HEIGHT,
		Math.round(screenHeight * BASE_RATIO)
	);
	const tabHeight = calculated + insets.bottom;

	const tabItemStyles = '';

	return (
		<Tabs>
			<TabSlot />
			<TabList
				className='h-[8%]'
				style={{ height: tabHeight }}
			>
				<TabTrigger
					name='player/index'
					href='/player'
				>
					<Text>Home</Text>
				</TabTrigger>
				<TabTrigger
					name='statistics/index'
					href='/statistics'
					className='bg-red-500'
				>
					<Text>Statistics</Text>
				</TabTrigger>
			</TabList>
		</Tabs>
	);
}
