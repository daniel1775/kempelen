import { View, Pressable } from 'react-native';

import SearchIcon from '@/assets/svg/Search';
import TextBase from '@/UI/atoms/text/TextBase';
import CustomTextInput from '@/UI/atoms/input/CustomTextInput';

import type {
	TypeFormPlayerFieldsName,
	TypeUseCreatePlayerForm,
} from '@/src/types/player';

type TypeFormSearchField = {
	form: TypeUseCreatePlayerForm;
	name: TypeFormPlayerFieldsName;
	label: string;
	onPressSearch: () => void;
};

const labelStyles = 'text-light-gray text-[16px] mb-3';

const FormSearchField = ({
	form,
	name,
	label,
	onPressSearch,
}: TypeFormSearchField) => {
	return (
		<form.Field name={name}>
			{(field) => (
				<View className='w-full'>
					<TextBase customStyles={labelStyles}>{label}</TextBase>
					<View className='flex-1 relative'>
						<CustomTextInput
							value={String(field.state.value)}
							onChangeText={field.handleChange}
							className='flex-1'
						/>
						<Pressable
							className='absolute right-0 top-[-6]'
							hitSlop={10}
							onPress={onPressSearch}
						>
							<SearchIcon />
						</Pressable>
					</View>
				</View>
			)}
		</form.Field>
	);
};

export default FormSearchField;
