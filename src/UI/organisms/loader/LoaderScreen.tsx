import { View, ActivityIndicator, Modal } from 'react-native';

const LoaderScreen = () => {
	return (
		<View>
			<Modal
				visible={true}
				transparent
				animationType='fade'
			>
				<View className='w-[100%] h-[100%] items-center justify-center bg-black/80'>
					<ActivityIndicator
						size='large'
						testID='loader-indicator'
					/>
				</View>
			</Modal>
		</View>
	);
};

export default LoaderScreen;
