import '@/src/global.css';
import 'react-native-reanimated';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Dimensions, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import KempelenIcon from '@/assets/svg/Kempelen';
import translationsEn from '@/src/translations/translations-en.json';
import translationsEs from '@/src/translations/translations-es.json';
import TabButton from '@/UI/atoms/tab/TabButton';

const { height: screenHeight } = Dimensions.get('window');
const BASE_RATIO = 0.05;
const MIN_HEIGHT = 50;

const iconsMeasures = {
	width: 25,
	height: 25,
};

const queryClient = new QueryClient();

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: translationsEn,
		},
		es: {
			translation: translationsEs,
		},
	},
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default function Layout() {
	const insets = useSafeAreaInsets();
	const calculated = Math.max(
		MIN_HEIGHT,
		Math.round(screenHeight * BASE_RATIO),
	);
	const tabHeight = calculated + insets.bottom;

	return (
		<QueryClientProvider client={queryClient}>
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
			<Toast />
		</QueryClientProvider>
	);
}
