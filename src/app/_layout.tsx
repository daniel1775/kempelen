import '@/src/global.css';
import 'react-native-reanimated';

import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import { Dimensions, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import KempelenIcon from '@/assets/svg/Kempelen';
import PlayerIcon from '@/assets/svg/Player';
import SettingsIcon from '@/assets/svg/Settings';
import StatisticsIcon from '@/assets/svg/Statistics';
import TournamentIcon from '@/assets/svg/Tournament';

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
				className='h-[8%] flex-row justify-between'
				style={{ height: tabHeight }}
			>
				<TabTrigger
					name='index'
					href='/'
				>
					<TournamentIcon />
				</TabTrigger>
				<TabTrigger
					name='player'
					href='/player'
				>
					<PlayerIcon />
				</TabTrigger>
				<Pressable>
					<KempelenIcon />
				</Pressable>
				<TabTrigger
					name='statistics'
					href='/statistics'
				>
					<StatisticsIcon />
				</TabTrigger>
				<TabTrigger
					name='settings'
					href='/settings'
				>
					<SettingsIcon />
				</TabTrigger>
			</TabList>
		</Tabs>
	);
}
