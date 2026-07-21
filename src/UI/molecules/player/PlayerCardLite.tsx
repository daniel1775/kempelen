import { Image, Text, View } from 'react-native';

import type { TypePlayer } from '@/src/types/player';

type TypePlayerCardLiteProps = {
	player: TypePlayer;
};

const PlayerCardLite = ({ player }: TypePlayerCardLiteProps) => {
	return (
		<View>
			<Image source={{ uri: player.imageUrl }} />
			<Text>{`${player.name} ${player.elo ? `(${player.elo})` : ''}`}</Text>
		</View>
	);
};

export default PlayerCardLite;
