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
			const { item, id, index, ...rest } = props;
			return (
				<SortableItem
					key={id}
					id={id}
					data={item}
					onDrop={(a, b, allPositions) => {
						console.log('position: ', allPositions);
					}}
					{...rest}
				>
					<TiebreakCard
						tiebreakData={item}
						orderNumber={index + 1}
						onlyView={false}
					/>
				</SortableItem>
			);
		},
		[],
	);

	return (
		<Modal
			transparent
			animationType='fade'
		>
			<View className='flex-1 justify-center items-center bg-black/80 px-6'>
				<View className=' h-[500px] w-[90%]'>
					<Sortable
						data={allTiebreaks}
						renderItem={renderItem}
						itemHeight={60}
					/>
				</View>
			</View>
		</Modal>
	);
};

export default TiebreakSortableList;
