import TiebreakCard from '@/UI/molecules/tiebreak/TiebreakCard';

import type { TypeTiebreak } from '@/src/types/tiebreak';

type TypeTiebreakListProps = {
	allTiebreaks: TypeTiebreak[];
};

const TiebreakList = ({ allTiebreaks }: TypeTiebreakListProps) => {
	return allTiebreaks.map((tiebreak) => (
		<TiebreakCard
			key={tiebreak.id}
			tiebreakData={tiebreak}
		/>
	));
};

export default TiebreakList;
