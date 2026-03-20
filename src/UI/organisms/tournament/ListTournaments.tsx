import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import Accordion from '@/src/UI/molecules/layout/Accordion';
import TournamentCard from '@/src/UI/molecules/tournament/TournamentCard';

const dummyImage =
	'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=200&h=200&fit=crop'; // A space rocket image

const ListTournaments = () => {
	const { t } = useTranslation();

	return (
		<ScrollView
			className='w-full pt-4'
			showsVerticalScrollIndicator={false}
		>
			<View className='mb-4'>
				<Accordion title={t('currentTournaments')}>
					<TournamentCard
						title='Tournament 1'
						numPlayers={10}
						description='Description 1'
						imageUrl={dummyImage}
					/>
				</Accordion>
			</View>

			<View className='mb-[130px]'>
				<Accordion title={t('finishedTournaments')}>
					<TournamentCard
						title='Tournament 2'
						numPlayers={12}
						description='Description 2'
						imageUrl={dummyImage}
					/>
				</Accordion>
			</View>
		</ScrollView>
	);
};

export default ListTournaments;
