import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import DotsButton from '@/src/UI/atoms/buttons/DotsButton';
import Badge from '@/src/UI/atoms/general/Badge';
import Link from '@/src/UI/atoms/text/Link';

type TypeTournamentInfoProps = {
	title: string;
	description: string;
	status: string;
	onEdit: () => void;
	onDelete: () => void;
	onMoreInfo: () => void;
};

const TournamentInfo = ({
	title,
	description,
	status,
	onEdit,
	onDelete,
	onMoreInfo,
}: TypeTournamentInfoProps) => {
	const { t } = useTranslation();

	return (
		<View className='mt-6 px-6'>
			<View className='flex-row justify-between items-center'>
				<Text
					className='text-orange text-3xl font-bold flex-1'
					testID='tournament-title'
				>
					{title}
				</Text>
				<DotsButton
					handlePressEdit={onEdit}
					handlePressDelete={onDelete}
				/>
			</View>

			<Text
				className='text-light-gray text-lg mt-4 leading-6'
				testID='tournament-description'
			>
				{description}
			</Text>

			<View className='flex-row justify-between items-end mt-4'>
				<Badge text={status} />
				<Link
					text={t('moreInfo')}
					onPress={onMoreInfo}
					testID='more-info-link'
				/>
			</View>
		</View>
	);
};

export default TournamentInfo;
