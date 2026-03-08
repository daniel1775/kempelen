import { View } from 'react-native';

import TextBase from '../text/TextBase';
import CustomTextInput from '../input/CustomTextInput';

import type {
	TypeFormPlayerFieldsName,
	TypeUseCreatePlayerForm,
} from '@/src/types/player';

type TypeFormTextField = {
	form: TypeUseCreatePlayerForm;
	name: TypeFormPlayerFieldsName;
	label: string;
	noEmptyErrorMsg?: string;
};

const FormTextField = ({
	form,
	name,
	label,
	noEmptyErrorMsg,
}: TypeFormTextField) => {
	const labelStyles = 'text-light-gray text-[16px] mb-3';

	return (
		<form.Field
			name={name}
			validators={{
				onChange: ({ value }) => (value === '' ? noEmptyErrorMsg : undefined),
			}}
		>
			{(field) => (
				<View className='w-full'>
					<TextBase customStyles={labelStyles}>{label}</TextBase>
					<CustomTextInput
						value={String(field.state.value ?? '')}
						onChangeText={field.handleChange}
					/>
					{!field.state.meta.isValid && (
						<TextBase customStyles='!text-red-500 mt-2'>
							{field.state.meta.errors.join(', ')}
						</TextBase>
					)}
				</View>
			)}
		</form.Field>
	);
};

export default FormTextField;
