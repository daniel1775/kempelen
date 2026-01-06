import { Image, View } from 'react-native';

type TypePlayerCardProps = {
	imageUrl?: string;
};

const PlayerCard = ({ imageUrl }: TypePlayerCardProps) => {
	return (
		<View>
			<Image />
		</View>
	);
};

export default PlayerCard;
