import { View } from 'react-native';
import { Image } from 'expo-image';

type TypeTournamentHeaderProps = {
	imageUrl: string;
};

const TournamentHeader = ({ imageUrl }: TypeTournamentHeaderProps) => {
	return (
		<View className='relative w-full h-64'>
			<Image
				source={{ uri: imageUrl }}
				style={{ width: '100%', height: '100%' }}
				contentFit='cover'
			/>
		</View>
	);
};

export default TournamentHeader;
