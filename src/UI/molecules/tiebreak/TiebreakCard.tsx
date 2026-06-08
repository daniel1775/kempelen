import { View } from 'react-native';

import TextBase from '@/UI/atoms/text/TextBase';

import type { TypeTiebreak } from '@/src/types/tiebreak';

type TypeTiebreakCardProps = {
	tiebreakData: TypeTiebreak;
	onlyView?: boolean;
};

const TiebreakCard = ({
	tiebreakData,
	onlyView = false,
}: TypeTiebreakCardProps) => {
	return (
		<View className='flex-1'>
			<TextBase>{tiebreakData.name}</TextBase>
		</View>
	);
};

export default TiebreakCard;
