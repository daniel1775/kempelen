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

const iconsMeasures = {
	width: 29,
	height: 29,
};

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
				className='flex flex-row items-center bg-neutral-gray px-4 border-t-2 border-t-light-orange'
				style={{ height: tabHeight, paddingBottom: insets.bottom - 10 }}
			>
				<TabTrigger
					name='index'
					href='/'
				>
					<TournamentIcon
						height={iconsMeasures.height}
						width={iconsMeasures.width}
					/>
				</TabTrigger>
				<TabTrigger
					name='player'
					href='/player'
				>
					<PlayerIcon
						height={iconsMeasures.height}
						width={iconsMeasures.width}
					/>
				</TabTrigger>
				<Pressable className='border-2 rounded-full bg-gray border-light-orange p-5 -top-3'>
					<KempelenIcon
						height={41}
						width={41}
					/>
				</Pressable>
				<TabTrigger
					name='statistics'
					href='/statistics'
				>
					<StatisticsIcon
						height={iconsMeasures.height}
						width={iconsMeasures.width}
					/>
				</TabTrigger>
				<TabTrigger
					name='settings'
					href='/settings'
				>
					<SettingsIcon
						height={iconsMeasures.height}
						width={iconsMeasures.width}
					/>
				</TabTrigger>
			</TabList>
		</Tabs>
	);
}
