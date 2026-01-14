import { View } from 'react-native';

import RadioButton from '@/src/UI/atoms/buttons/RadioButton';
import ScreenLayout from '@/src/UI/layouts/ScreenLayout';

export default function CreatePlayer() {
	return (
		<ScreenLayout title='Create Player'>
			<View className='flex-1 justify-center items-center'>
				<RadioButton
					label='Player 1'
					onPress={() => {}}
				/>
				<RadioButton
					label='Player 2'
					onPress={() => {}}
				/>
			</View>
		</ScreenLayout>
	);
}
