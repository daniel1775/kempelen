import { Image, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import TextBase from '@/src/UI/atoms/text/TextBase';

type TypeTournamentCardProps = {
	title: string;
	numPlayers?: number;
	description?: string;
	imageUrl?: string;
};

const TournamentCard = ({
	title,
	numPlayers = 0,
	description,
	imageUrl,
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
				<TextBase customStyles='text-orange text-[19px] mb-1'>
					{title || t('tournamentTitle')}
				</TextBase>
				<View className='flex flex-row items-center mb-3 gap-x-2'>
					<TextBase customStyles='text-light-gray text-[15px]'>
						{numPlayers}
					</TextBase>
					<FontAwesome
						name='user'
						size={17}
						color='#ABA7A7'
					/>
				</View>
				<TextBase customStyles='text-light-gray text-[15px]'>
					{description || t('description')}
				</TextBase>
			</View>
		</View>
	);
};

export default TournamentCard;
