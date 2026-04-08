import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

import { useGetAllTournaments } from '@/src/hooks/queries/tournament/useGetAllTournaments';
import { resolveImageUri } from '@/src/utils/image/resolveImageUri';

import Accordion from '@/src/UI/molecules/layout/Accordion';
import TournamentCard from '@/src/UI/molecules/tournament/TournamentCard';
import Loading from '@/src/UI/atoms/general/Loading';

const dummyImage =
	'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=200&h=200&fit=crop';

const ListTournaments = () => {
	const { t } = useTranslation();
	const { allTournamentsData, isLoading } = useGetAllTournaments();

	const currentTournaments = useMemo(() => {
		return (
			allTournamentsData?.filter(
				(tournament) => tournament.status !== 'finished',
			) || []
		);
	}, [allTournamentsData]);

	const finishedTournaments = useMemo(() => {
		return (
			allTournamentsData?.filter(
				(tournament) => tournament.status === 'finished',
			) || []
		);
	}, [allTournamentsData]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<ScrollView
			className='w-full pt-4'
			showsVerticalScrollIndicator={false}
		>
			<View className='mb-4'>
				<Accordion title={t('currentTournaments')}>
					{currentTournaments.map((tournament) => (
						<TournamentCard
							key={tournament.id}
							title={tournament.title}
							numPlayers={0} // TODO: Add logic to calculate number of players
							description={tournament.description}
							imageUrl={resolveImageUri(tournament.image) || dummyImage}
						/>
					))}
				</Accordion>
			</View>

			<View className='mb-[130px]'>
				<Accordion title={t('finishedTournaments')}>
					{finishedTournaments.map((tournament) => (
						<TournamentCard
							key={tournament.id}
							title={tournament.title}
							numPlayers={0} // TODO: Add logic to calculate number of players
							description={tournament.description}
							imageUrl={resolveImageUri(tournament.image) || dummyImage}
						/>
					))}
				</Accordion>
			</View>
		</ScrollView>
	);
};

export default ListTournaments;
