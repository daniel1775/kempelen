import { View, Modal } from 'react-native';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
	Sortable,
	SortableItem,
	SortableRenderItemProps,
} from 'react-native-reanimated-dnd';
import TiebreakCard from '@/UI/molecules/tiebreak/TiebreakCard';

import type { TypeTiebreak } from '@/src/types/tiebreak';
import CustomButton from '@/UI/atoms/buttons/CustomButton';

type TypeTiebreakSortableListProps = {
	allTiebreaks: TypeTiebreak[];
};

const TiebreakSortableList = ({
	allTiebreaks,
}: TypeTiebreakSortableListProps) => {
	const { t } = useTranslation();

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
			<View className='flex-1 justify-center items-center bg-black/80 px-6 '>
				<View className='justify-center items-center w-[90%] bg-gray'>
					<View className='h-[290px] w-[80%] bg-gray'>
						<Sortable
							data={allTiebreaks}
							renderItem={renderItem}
							itemHeight={60}
							style={{ backgroundColor: '#23272A' }}
						/>
					</View>
					<View className='flex-row justify-center gap-x-4 mt-6'>
						<CustomButton
							text={t('cancel')}
							onPress={() => {}}
							variant='primary-sm'
						/>
						<CustomButton
							text={t('save')}
							onPress={() => {}}
							variant='primary-sm'
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default TiebreakSortableList;
