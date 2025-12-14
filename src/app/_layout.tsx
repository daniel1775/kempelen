import '@/src/global.css';
import 'react-native-reanimated';

import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import { Dimensions, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import KempelenIcon from '@/assets/svg/Kempelen';
import TabButton from '@/UI/atoms/tab/TabButton';

const { height: screenHeight } = Dimensions.get('window');
const BASE_RATIO = 0.05;
const MIN_HEIGHT = 50;

const iconsMeasures = {
	width: 25,
	height: 25,
};

export default function Layout() {
	const insets = useSafeAreaInsets();
	const calculated = Math.max(
		MIN_HEIGHT,
		Math.round(screenHeight * BASE_RATIO)
	);
	const tabHeight = calculated + insets.bottom;

	const tabItemStyles = '';
	const activeTabItemStyles =
		'absolute top-[-10] bottom-[-10] left-[-10] right-[-10] rounded-full bg-orange opacity-20';

	return (
		<Tabs>
			{/* TabSlot is where the nested tab screens will be rendered */}
			<TabSlot />
			<TabList
				className='flex flex-row items-center bg-neutral-gray px-5 border-t-2 pt-2 border-t-light-orange'
				style={{ height: tabHeight, paddingBottom: insets.bottom - 10 }}
			>
				<TabTrigger
					name='index'
					href='/'
					asChild
				>
					<TabButton iconType='tournament' />
				</TabTrigger>
				<TabTrigger
					name='player'
					href='/player'
					asChild
				>
					<TabButton iconType='player' />
				</TabTrigger>
				<Pressable
					className='border-2 rounded-full bg-gray border-light-orange p-5 -top-3'
					onPress={() => {
						// Navigate to the home page or perform any action
					}}
				>
					<KempelenIcon
						height={iconsMeasures.height + 11}
						width={iconsMeasures.width + 11}
					/>
				</Pressable>
				<TabTrigger
					name='statistics'
					href='/statistics'
					asChild
				>
					<TabButton iconType='statistics' />
				</TabTrigger>
				<TabTrigger
					name='settings'
					href='/settings'
					asChild
				>
					<TabButton iconType='settings' />
				</TabTrigger>
			</TabList>
		</Tabs>
	);
}
