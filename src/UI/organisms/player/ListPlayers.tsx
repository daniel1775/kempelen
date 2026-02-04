import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { getAllPlayers } from '@/src/api/getAllPlayers';
import PlayerCard from '@/UI/molecules/player/PlayerCard';

import type { TypePlayer } from '@/src/types/player';

const ListPlayers = () => {
	const [allPlayers, setAllPlayers] = useState<TypePlayer[]>([]);

	useEffect(() => {
		const fetchPlayersData = async () => {
			const allPlayersRes = await getAllPlayers();

			setAllPlayers(allPlayersRes);
		};

		fetchPlayersData();
	}, []);

	return (
		<FlatList
			data={allPlayers}
			keyExtractor={(_, index) => index.toString()}
			renderItem={({ item }) => (
				<PlayerCard
					playerName={item.name}
					playerElo={item.elo}
					imageUrl={item.imageUri}
				/>
			)}
			ItemSeparatorComponent={() => <View className='h-6' />}
		/>
	);
};

export default ListPlayers;
