import { FlatList, View } from 'react-native';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetAllPlayers } from '@/src/hooks/queries/player/useGetAllPlayers';

import PlayerCard from '@/UI/molecules/player/PlayerCard';
import Loading from '@/UI/atoms/general/Loading';
import TextBase from '@/UI/atoms/text/TextBase';

import type { TypePlayer } from '@/src/types/player';

type TypeListPlayersProps = {
	searchText: string;
	isPlayersForTournament?: boolean;
};

const ListPlayers = ({
	searchText,
	isPlayersForTournament,
}: TypeListPlayersProps) => {
	const { allPlayersData, isLoading } = useGetAllPlayers();
	const { t } = useTranslation();

	const filteredPlayers = useMemo(() => {
		return allPlayersData?.filter((player) =>
			player.name.toLowerCase().includes(searchText.toLowerCase()),
		);
	}, [searchText, allPlayersData]);

	const handleSelectPlayerForTournament = (player: TypePlayer) => {
		if (!isPlayersForTournament) {
			return;
		}
	};

	if (isLoading) {
		return <Loading />;
	}

	if (!isLoading && allPlayersData?.length === 0) {
		return (
			<View className='flex-1 items-center pt-32'>
				<TextBase>{t('noPlayersAvailable')}</TextBase>
			</View>
		);
	}

	if (!isLoading && filteredPlayers?.length === 0) {
		return (
			<View className='flex-1 items-center pt-32'>
				<TextBase>{t('noPlayersFound')}</TextBase>
			</View>
		);
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
