import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { fetchAllPlayers } from '@/src/api/fetchAllPlayers';
import PlayerCard from '@/UI/molecules/player/PlayerCard';

import type { TypePlayer } from '@/src/types/player';

const ListPlayers = () => {
	const [allPlayers, setAllPlayers] = useState<TypePlayer[]>([]);

	useEffect(() => {
		const fetchPlayersData = async () => {
			const allPlayersRes = await fetchAllPlayers();

			setAllPlayers(allPlayersRes);
		};

		fetchPlayersData();
	}, []);

	return (
		<FlatList
			data={allPlayers}
			keyExtractor={(_, index) => index.toString()}
			renderItem={({ item: player }) => <PlayerCard player={player} />}
			ItemSeparatorComponent={() => <View className='h-6' />}
		/>
	);
};

export default ListPlayers;
