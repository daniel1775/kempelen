import { Image, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

type TypeTournamentCardProps = {
	title?: string;
	numPlayers?: string | number;
	description?: string;
	imageUrl?: string;
};

const TournamentCard = ({
	title,
	numPlayers,
	description,
	imageUrl // We can pass a dummy rocket image from ListTournaments or keep it flexible
}: TypeTournamentCardProps) => {
	const { t } = useTranslation();

	return (
		<View className='flex flex-row bg-neutral-gray p-4 w-full h-[140px] mb-4'>
			{imageUrl ? (
				<Image
					className='w-[100px] h-[100px]'
					source={{ uri: imageUrl }}
				/>
			) : (
				<View className='w-[100px] h-[100px] bg-gray' />
			)}
			<View className='ml-4 flex-1 py-1'>
				<Text className='text-orange text-[17px] mb-1'>
					{title || t('tournamentTitle')}
				</Text>
				<Text className='text-light-gray text-[13px] mb-3'>
					{numPlayers || t('numberOfPlayers')}
				</Text>
				<Text className='text-light-gray text-[13px]'>
					{description || t('description')}
				</Text>
			</View>
		</View>
	);
};

export default TournamentCard;
