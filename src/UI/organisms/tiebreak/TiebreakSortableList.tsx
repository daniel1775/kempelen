import { View, Modal } from 'react-native';
import { useCallback } from 'react';
import {
	Sortable,
	SortableItem,
	SortableRenderItemProps,
} from 'react-native-reanimated-dnd';
import TiebreakCard from '@/UI/molecules/tiebreak/TiebreakCard';

import type { TypeTiebreak } from '@/src/types/tiebreak';

type TypeTiebreakSortableListProps = {
	allTiebreaks: TypeTiebreak[];
};

const TiebreakSortableList = ({
	allTiebreaks,
}: TypeTiebreakSortableListProps) => {
	const renderItem = useCallback(
		(props: SortableRenderItemProps<(typeof allTiebreaks)[0]>) => {
			const { item, id, ...rest } = props;
			return (
				<SortableItem
					key={id}
					id={id}
					data={item}
					{...rest}
				>
					<TiebreakCard tiebreakData={item} />
				</SortableItem>
			);
		},
		[],
	);

	return (
		<Modal>
			<View>
				<Sortable
					data={allTiebreaks}
					renderItem={renderItem}
					itemHeight={60}
				/>
			</View>
		</Modal>
	);
};

export default TiebreakSortableList;
