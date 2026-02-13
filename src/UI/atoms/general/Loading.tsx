import { ActivityIndicator, View } from 'react-native';

const Loading = () => {
	return (
		<View className='flex-1 items-center justify-center'>
			<ActivityIndicator size='large' />
		</View>
	);
};

export default Loading;
