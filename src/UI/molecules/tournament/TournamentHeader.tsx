import { View } from 'react-native';
import { Image } from 'expo-image';

import { resolveImageUri } from '@/src/utils/image/resolveImageUri';

import DefaultTournamentImage from '@/images/tournament-default.jpg';

type TypeTournamentHeaderProps = {
	imageUrl?: string;
};

const TournamentHeader = ({ imageUrl }: TypeTournamentHeaderProps) => {
	return (
		<View className='relative w-full h-64'>
			{imageUrl ? (
				<Image
					source={{ uri: resolveImageUri(imageUrl) }}
					style={{ width: '100%', height: '100%' }}
					contentFit='cover'
				/>
			) : (
				<Image
					source={DefaultTournamentImage}
					style={{ width: '100%', height: '100%' }}
					contentFit='cover'
					testID='default-image'
				/>
			)}
			<View className='absolute inset-0 bg-black/60' />
		</View>
	);
};

export default TournamentHeader;
