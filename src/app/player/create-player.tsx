import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function CreatePlayer() {
	return (
		<View className='flex-1 justify-center items-center bg-gray'>
			<Text className='text-white'>Create Player</Text>
			<Link
				href='/player'
				asChild
			>
				<Pressable>
					<Text className='text-light-orange text-lg mt-4'>Go Back</Text>
				</Pressable>
			</Link>
		</View>
	);
}
