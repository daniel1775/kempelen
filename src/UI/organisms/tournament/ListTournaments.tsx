import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import SectionHeader from '@/src/UI/molecules/layout/SectionHeader';
import TournamentCard from '@/src/UI/molecules/tournament/TournamentCard';

const dummyImage = 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=200&h=200&fit=crop'; // A space rocket image

const ListTournaments = () => {
	const { t } = useTranslation();

	return (
		<ScrollView className='w-full pt-4' showsVerticalScrollIndicator={false}>
			<View className='mb-4'>
				<SectionHeader title={t('currentTournaments')}>
					<TournamentCard imageUrl={dummyImage} />
				</SectionHeader>
			</View>

			<View className='mb-[130px]'>
				<SectionHeader title={t('finishedTournaments')}>
					<TournamentCard imageUrl={dummyImage} />
				</SectionHeader>
			</View>
		</ScrollView>
	);
};

export default ListTournaments;
