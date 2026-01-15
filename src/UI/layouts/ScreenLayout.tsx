import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type TypeScreenLayoutProps = {
	children: React.ReactNode;
	title: string;
};

const ScreenLayout = ({ children, title }: TypeScreenLayoutProps) => {
	const insets = useSafeAreaInsets();

	return (
		<View
			className='bg-gray flex-1 px-6'
			style={{ paddingTop: insets.top }}
		>
			<Text className='text-orange text-4xl text-center mt-6'>{title}</Text>
			{children}
		</View>
	);
};

export default ScreenLayout;
