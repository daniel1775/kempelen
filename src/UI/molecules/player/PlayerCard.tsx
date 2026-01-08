import { Image, ImageSourcePropType, Text, View } from 'react-native';

import DotsIcon from '@/assets/svg/Dots';
import SmallButton from '../../atoms/buttons/AddButton';

type TypePlayerCardProps = {
	playerName: string;
	playerElo: number;
	imageUrl?: ImageSourcePropType;
};

const PlayerCard = ({
	imageUrl,
	playerName,
	playerElo,
}: TypePlayerCardProps) => {
	const onPressAdd = () => {};

	const onPressRemove = () => {};

	return (
		<View className='flex flex-row bg-neutral-gray p-4 w-full rounded-lg'>
			<View className='flex flex-row'>
				{imageUrl ? (
					<Image
						className='w-[76px] h-[76px]'
						source={imageUrl}
					/>
				) : null}
				<View className='ml-4'>
					<Text className='text-light text-[15px] mb-2'>{playerName}</Text>
					<Text className='text-light text-[15px]'>ELO: {playerElo}</Text>
				</View>
			</View>
			<View className='flex-1' />
			<View className='flex justify-between items-end'>
				<DotsIcon />
				<View className='flex-1' />
				<SmallButton
					onPressAdd={onPressAdd}
					onPressRemove={onPressRemove}
				/>
			</View>
		</View>
	);
};

export default PlayerCard;
