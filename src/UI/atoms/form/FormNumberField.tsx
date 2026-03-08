import { View } from 'react-native';

import TextBase from '@/UI/atoms/text/TextBase';
import CustomTextInput from '@/UI/atoms/input/CustomTextInput';

import type {
	TypeFormPlayerFieldsName,
	TypeUseCreatePlayerForm,
} from '@/src/types/player';

type TypeFormNumberField = {
	form: TypeUseCreatePlayerForm;
	name: TypeFormPlayerFieldsName;
	label: string;
	noNumberErrorMsg?: string;
};

const FormNumberField = ({
	form,
	name,
	label,
	noNumberErrorMsg,
}: TypeFormNumberField) => {
	const labelStyles = 'text-light-gray text-[16px] mb-3';

	return (
		<form.Field
			name={name}
			validators={{
				onChange: ({ value }) =>
					!value || !Number.isFinite(value) || Number(value) < 0
						? noNumberErrorMsg
						: undefined,
			}}
		>
			{(field) => (
				<View className='w-full'>
					<TextBase customStyles={labelStyles}>{label}</TextBase>
					<CustomTextInput
						value={String(field.state.value)}
						onChangeText={(value) => {
							const numericValue = value === '' ? 0 : Number(value);
							field.handleChange(numericValue);
						}}
						keyboardType='numeric'
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

export default FormNumberField;
