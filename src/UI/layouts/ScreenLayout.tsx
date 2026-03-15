import { Text, View } from 'react-native';

type TypeScreenLayoutProps = {
	children: React.ReactNode;
	title: string;
};

const ScreenLayout = ({ children, title }: TypeScreenLayoutProps) => {
	return (
		<View className='bg-gray flex-1 px-6'>
			<Text className='text-orange text-4xl text-center'>{title}</Text>
			{children}
		</View>
	);
};

export default ScreenLayout;
