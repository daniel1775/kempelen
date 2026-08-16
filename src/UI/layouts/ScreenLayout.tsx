import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '@/src/UI/layouts/Header';

type TypeScreenLayoutProps = {
	children: React.ReactNode;
	title?: string;
	isHeaderShown?: boolean;
	onBack?: () => void;
};

const ScreenLayout = ({
	children,
	title,
	isHeaderShown = false,
	onBack,
}: TypeScreenLayoutProps) => {
	const insets = useSafeAreaInsets();

	return (
		<View className='bg-gray flex-1 px-6'>
			{isHeaderShown ? (
				<Header onBack={onBack} />
			) : (
				<View
					className='w-full'
					style={{ height: insets.top + 30 }}
				/>
			)}
			{title && (
				<Text className='text-orange text-4xl text-center'>{title}</Text>
			)}
			{children}
		</View>
	);
};

export default ScreenLayout;
