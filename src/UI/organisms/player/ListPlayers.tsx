import { FlatList, View } from 'react-native';

import { useGetAllPlayers } from '@/src/hooks/queries/player/useGetAllPlayers';

import PlayerCard from '@/UI/molecules/player/PlayerCard';
import Loading from '@/UI/atoms/general/Loading';

const ListPlayers = () => {
	const { allPlayersData, isLoading } = useGetAllPlayers();

	if (isLoading) {
		return <Loading />;
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
