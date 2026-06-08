import { Pressable, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

import TextBase from '@/UI/atoms/text/TextBase';

type TypeFormTiebreakFieldProps = {
	onEditPress: () => void;
	onInfoPress: () => void;
};

const FormTiebreakField = ({
	onEditPress,
	onInfoPress,
}: TypeFormTiebreakFieldProps) => {
	const { t } = useTranslation();

	return (
		<View className='flex-1 flex-row gap-x-2'>
			<TextBase customStyles={'text-light-gray text-[16px] mr-4'}>
				{`${t('tiebreaks')} `}
			</TextBase>
			<Pressable onPress={onEditPress}>
				<MaterialIcons
					name='edit'
					size={24}
					color='white'
				/>
			</Pressable>
			<Pressable onPress={onInfoPress}>
				<Entypo
					name='info-with-circle'
					size={22}
					color='white'
				/>
			</Pressable>
		</View>
	);
};

export default FormTiebreakField;
