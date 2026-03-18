import { FlatList, View } from 'react-native';
import { useMemo } from 'react';

import { useGetAllPlayers } from '@/src/hooks/queries/player/useGetAllPlayers';

import PlayerCard from '@/UI/molecules/player/PlayerCard';
import Loading from '@/UI/atoms/general/Loading';

type TypeListPlayersProps = {
	searchText: string;
};

const ListPlayers = ({ searchText }: TypeListPlayersProps) => {
	const { allPlayersData, isLoading } = useGetAllPlayers();

	const filteredPlayers = useMemo(() => {
		return allPlayersData?.filter((player) =>
			player.name.toLowerCase().includes(searchText.toLowerCase()),
		);
	}, [searchText, allPlayersData]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<FlatList
			data={filteredPlayers}
			keyExtractor={(_, index) => index.toString()}
			renderItem={({ item: player }) => <PlayerCard player={player} />}
			ItemSeparatorComponent={() => <View className='h-6' />}
			ListFooterComponent={() => <View className='h-[130px] w-full' />}
			showsVerticalScrollIndicator={false}
		/>
	);
};

export default ListPlayers;
