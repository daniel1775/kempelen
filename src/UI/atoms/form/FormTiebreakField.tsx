import { Pressable, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';

import TextBase from '@/UI/atoms/text/TextBase';
import TiebreakList from '@/UI/organisms/tiebreak/TiebreakList';
import TiebreakSortableList from '@/UI/organisms/tiebreak/TiebreakSortableList';

import type { TypeTiebreak } from '@/src/types/tiebreak';

type TypeFormTiebreakFieldProps = {
	userTiebreaks: TypeTiebreak[];
	form: any;
};

const FormTiebreakField = ({
	userTiebreaks,
	form,
}: TypeFormTiebreakFieldProps) => {
	const [showTiebreaks, setShowTiebreaks] = useState(false);
	const [showInfo, setShowInfo] = useState(false);

	const { t } = useTranslation();

	const onCancelTiebreaks = () => {
		setShowTiebreaks(false);
	};

	const onSaveTiebreaks = (tiebreaksToUpdate: TypeTiebreak[]) => {
		form.setFieldValue('tiebreaks', tiebreaksToUpdate);
		setShowTiebreaks(false);
	};

	return (
		<View className='w-full'>
			{userTiebreaks && userTiebreaks.length > 0 && showTiebreaks && (
				<TiebreakSortableList
					allTiebreaks={userTiebreaks}
					onCancel={onCancelTiebreaks}
					onSave={onSaveTiebreaks}
				/>
			)}
			<View className='flex-row gap-x-2 w-full mb-8'>
				<TextBase customStyles={'text-light-gray text-[16px] mr-4'}>
					{`${t('tiebreaks')} `}
				</TextBase>
				<Pressable
					onPress={() => {
						setShowTiebreaks(true);
					}}
				>
					<MaterialIcons
						name='edit'
						size={24}
						color='white'
					/>
				</Pressable>
				<Pressable
					onPress={() => {
						setShowInfo(true);
					}}
				>
					<Entypo
						name='info-with-circle'
						size={22}
						color='white'
					/>
				</Pressable>
			</View>
			{userTiebreaks && userTiebreaks.length > 0 && (
				<TiebreakList allTiebreaks={userTiebreaks} />
			)}
		</View>
	);
};

export default FormTiebreakField;
