import { Text, View } from 'react-native';
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
	return (
		<View className='mt-6 px-6'>
			<View className='flex-row justify-between items-center'>
				<Text className='text-orange text-3xl font-bold flex-1'>{title}</Text>
				<DotsButton
					handlePressEdit={onEdit}
					handlePressDelete={onDelete}
				/>
			</View>

			<Text className='text-light-gray text-lg mt-4 leading-6'>
				{description}
			</Text>

			<View className='flex-row justify-between items-end mt-4'>
				<Badge text={status} />
				<Link
					text='more info'
					onPress={onMoreInfo}
				/>
			</View>
		</View>
	);
};

export default TournamentInfo;
