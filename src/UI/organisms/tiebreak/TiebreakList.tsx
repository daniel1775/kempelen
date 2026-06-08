import TiebreakCard from '@/UI/molecules/tiebreak/TiebreakCard';
import { View } from 'react-native';

import type { TypeTiebreak } from '@/src/types/tiebreak';

type TypeTiebreakListProps = {
	allTiebreaks: TypeTiebreak[];
};

const TiebreakList = ({ allTiebreaks }: TypeTiebreakListProps) => {
	return (
		<View className='w-full gap-y-5'>
			{allTiebreaks.map((tiebreak, index) => (
				<TiebreakCard
					key={tiebreak.id}
					tiebreakData={tiebreak}
					orderNumber={index + 1}
				/>
			))}
		</View>
	);
};

export default TiebreakList;
