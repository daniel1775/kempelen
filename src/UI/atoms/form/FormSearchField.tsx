import { View, Pressable } from 'react-native';

import SearchIcon from '@/assets/svg/Search';
import TextBase from '../text/TextBase';
import CustomTextInput from '../input/CustomTextInput';

type TypeFormSearchField = {
	form: any;
	name: any;
	label: string;
	onPressSearch: (searchValue: string) => void;
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
			{(field: any) => (
				<View className='w-full'>
					<TextBase customStyles={labelStyles}>{label}</TextBase>
					<View className='flex-1 relative'>
						<CustomTextInput
							value={String(field.state.value)}
							onChangeText={field.handleChange}
							className='flex-1'
							autoCapitalize='none'
						/>
						<Pressable
							className='absolute right-0 top-[-6]'
							hitSlop={10}
							onPress={() => onPressSearch(String(field.state.value))}
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
