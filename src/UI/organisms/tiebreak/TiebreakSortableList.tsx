import { View, Modal } from 'react-native';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
	Sortable,
	SortableItem,
	SortableRenderItemProps,
} from 'react-native-reanimated-dnd';

import TiebreakCard from '@/UI/molecules/tiebreak/TiebreakCard';
import CustomButton from '@/UI/atoms/buttons/CustomButton';

import type { TypeTiebreak } from '@/src/types/tiebreak';

type TypeTiebreakSortableListProps = {
	allTiebreaks: TypeTiebreak[];
	onSave: (tiebreaks: TypeTiebreak[]) => void;
	onCancel: () => void;
};

const TiebreakSortableList = ({
	allTiebreaks,
	onSave,
	onCancel,
}: TypeTiebreakSortableListProps) => {
	const [tiebreaksToUpdate, setTiebreaksToUpdate] = useState(allTiebreaks);

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
						if (!allPositions || allPositions.length === 0) return;

						const positionsOrdered: TypeTiebreak[] = [];

						Object.keys(allPositions).map((key) => {
							const position = allPositions[key];
							positionsOrdered[position] = allTiebreaks.find(
								(item) => item.id === key,
							)!;
						});

						setTiebreaksToUpdate(positionsOrdered);
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
				<View className='justify-center items-center w-[90%] bg-gray py-6'>
					<View className='h-[300px] w-[80%] bg-gray'>
						<Sortable
							data={tiebreaksToUpdate}
							renderItem={renderItem}
							itemHeight={60}
							style={{ backgroundColor: '#23272A' }}
						/>
					</View>
					<View className='flex-row justify-center gap-x-4 mt-6'>
						<CustomButton
							text={t('cancel')}
							onPress={onCancel}
							variant='primary-sm'
						/>
						<CustomButton
							text={t('save')}
							onPress={() => onSave(tiebreaksToUpdate)}
							variant='primary-sm'
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default TiebreakSortableList;
