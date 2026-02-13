import { ActivityIndicator, FlatList, View } from 'react-native';
import PlayerCard from '@/UI/molecules/player/PlayerCard';

import { useGetAllPlayers } from '@/src/hooks/queries/player/useGetAllPlayers';

const ListPlayers = () => {
	const { allPlayersData, isLoading } = useGetAllPlayers();

	if (isLoading) {
		return (
			<View className='flex-1 items-center justify-center'>
				<ActivityIndicator size='large' />
			</View>
		);
	}

	return (
		<FlatList
			data={allPlayersData}
			keyExtractor={(_, index) => index.toString()}
			renderItem={({ item: player }) => <PlayerCard player={player} />}
			ItemSeparatorComponent={() => <View className='h-6' />}
		/>
	);
};

export default ListPlayers;
