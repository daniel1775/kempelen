import { View, Text } from 'react-native';
import { SortableItem } from 'react-native-reanimated-dnd';

import TextBase from '@/UI/atoms/text/TextBase';

import type { TypeTiebreak } from '@/src/types/tiebreak';

type TypeTiebreakCardProps = {
	tiebreakData: TypeTiebreak;
	orderNumber: number;
	onlyView?: boolean;
};

const TiebreakCard = ({
	tiebreakData,
	orderNumber,
	onlyView = true,
}: TypeTiebreakCardProps) => {
	return (
		<View className='flex-1 flex-row bg-neutral-gray'>
			<TextBase customStyles='mr-4 text-white border-r-[1px] border-white px-3 py-2 text-[16px]'>
				{orderNumber}
			</TextBase>
			<TextBase customStyles='text-white py-2 text-[16px]'>
				{tiebreakData.name}
			</TextBase>
			{!onlyView && (
				<View className='flex-1 items-end justify-center pr-4'>
					<SortableItem.Handle>
						<Text className='text-white'>⣿</Text>
					</SortableItem.Handle>
				</View>
			)}
		</View>
	);
};

export default TiebreakCard;
