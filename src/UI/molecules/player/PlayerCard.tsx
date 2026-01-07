import { Image, ImageSourcePropType, Text, View } from 'react-native';

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
	return (
		<View className='flex flex-row bg-neutral-gray p-4'>
			{imageUrl ? (
				<Image
					className='w-[76px] h-[76px]'
					source={imageUrl}
				/>
			) : null}
			<View className='ml-4'>
				<Text className='text-light text-[15px] mb-2'>
					{playerName}
				</Text>
				<Text className='text-light text-[15px]'>ELO: {playerElo}</Text>
			</View>
		</View>
	);
};

export default PlayerCard;
