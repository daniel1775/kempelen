import { Image, Text, View } from 'react-native';

import { useRouter } from 'expo-router';
import AddButton from '../../atoms/buttons/AddButton';
import DotsButton from '../../atoms/buttons/DotsButton';

import type { TypePlayer } from '@/src/types/player';

type TypePlayerCardProps = {
	player: TypePlayer;

	handleAddPlayer?: (player: TypePlayer) => void;
};

const PlayerCard = ({ player, handleAddPlayer }: TypePlayerCardProps) => {
	const router = useRouter();

	const onPressAdd = () => {};

	const onPressRemove = () => {};

	const handlePressEdit = () => {
		router.navigate({
			pathname: '/player/create-player',
			params: player,
		});
	};

	return (
		<View className='flex flex-row bg-neutral-gray p-4 w-full rounded-lg h-[120px]'>
			<View className='flex flex-row'>
				{player.imageUrl ? (
					<Image
						className='w-[80px] h-[80px]'
						source={{ uri: player.imageUrl }}
					/>
				) : null}
				<View className='ml-4'>
					<Text className='text-light text-[15px] mb-2'>{player.name}</Text>
					<Text className='text-light text-[15px]'>ELO: {player.elo}</Text>
				</View>
			</View>
			<View className='flex-1' />
			<View className='flex justify-between items-end'>
				<DotsButton handlePressEdit={handlePressEdit} />
				{handleAddPlayer && (
					<AddButton
						onPressAdd={onPressAdd}
						onPressRemove={onPressRemove}
					/>
				)}
			</View>
		</View>
	);
};

export default PlayerCard;
