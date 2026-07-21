import { Pressable, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import TextBase from '@/UI/atoms/text/TextBase';

type TypeFormPlayersFieldProps = {
	form: any;
};

const FormPlayersField = ({ form }: TypeFormPlayersFieldProps) => {
	const { t } = useTranslation();

	return (
		<View className='flex-1 flex-row gap-x-2'>
			<TextBase customStyles={'text-light-gray text-[16px] mr-4'}>
				{`${t('players')}: `}
			</TextBase>
			<Pressable onPress={() => {}}>
				<MaterialIcons
					name='edit'
					size={24}
					color='white'
				/>
			</Pressable>
		</View>
	);
};

export default FormPlayersField;
