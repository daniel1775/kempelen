import { Image, Text, View } from 'react-native';

import AddButton from '../../atoms/buttons/AddButton';
import DotsButton from '../../atoms/buttons/DotsButton';

type TypePlayerCardProps = {
	playerName: string;
	playerElo: number;
	imageUrl?: string;
};

const PlayerCard = ({
	imageUrl,
	playerName,
	playerElo,
}: TypePlayerCardProps) => {
	const onPressAdd = () => {};

	const onPressRemove = () => {};

	return (
		<View className='flex flex-row bg-neutral-gray p-4 w-full rounded-lg h-[120px]'>
			<View className='flex flex-row'>
				{imageUrl ? (
					<Image
						className='w-[80px] h-[80px]'
						source={{ uri: imageUrl }}
					/>
				) : null}
				<View className='ml-4'>
					<Text className='text-light text-[15px] mb-2'>{playerName}</Text>
					<Text className='text-light text-[15px]'>ELO: {playerElo}</Text>
				</View>
			</View>
			<View className='flex-1' />
			<View className='flex justify-between items-end'>
				<DotsButton />
				<AddButton
					onPressAdd={onPressAdd}
					onPressRemove={onPressRemove}
				/>
			</View>
		</View>
	);
};

export default PlayerCard;
