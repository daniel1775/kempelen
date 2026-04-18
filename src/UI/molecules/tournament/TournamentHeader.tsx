import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, View } from 'react-native';
import { Image } from 'expo-image';

type TypeTournamentHeaderProps = {
	imageUrl: string;
};

const TournamentHeader = ({ imageUrl }: TypeTournamentHeaderProps) => {
	const router = useRouter();

	return (
		<View className='relative w-full h-64'>
			<Image
				source={{ uri: imageUrl }}
				style={{ width: '100%', height: '100%' }}
				contentFit='cover'
			/>
			<Pressable
				onPress={() => router.back()}
				className='absolute top-12 left-6 z-10'
				hitSlop={20}
				testID='back-button'
			>
				<Ionicons
					name='chevron-back'
					size={32}
					color='#F9AC52'
				/>
			</Pressable>
		</View>
	);
};

export default TournamentHeader;
