import { ScrollView, View } from 'react-native';

import RadioButton from '@/src/UI/atoms/buttons/RadioButton';
import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import CreatePlayerForm from '@/src/UI/organisms/player/CreatePlayerForm';
import { useState } from 'react';

export default function CreatePlayer() {
	const [creationType, setCreationType] = useState<'manual' | 'online'>(
		'manual'
	);

	return (
		<ScreenLayout title='Create Player'>
			<ScrollView>
				<View className='flex-1 mt-16 gap-4 mb-12 px-4'>
					<RadioButton
						label='Manually'
						onPress={() => {
							setCreationType('manual');
						}}
						isActive={creationType === 'manual'}
					/>
					<RadioButton
						label='Linked with Chess.com'
						onPress={() => {
							setCreationType('online');
						}}
						isActive={creationType === 'online'}
					/>
				</View>
				<CreatePlayerForm typePlayer={creationType} />
			</ScrollView>
		</ScreenLayout>
	);
}
