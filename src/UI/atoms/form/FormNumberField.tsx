import { View, TextInput, Platform } from 'react-native';

import TextBase from '../text/TextBase';

type TypeFormNumberField = {
	form: any;
	name: any;
	label: string;
	noNumberErrorMsg?: string;
	placeholder?: string;
};

const FormNumberField = ({
	form,
	name,
	label,
	noNumberErrorMsg,
	placeholder,
}: TypeFormNumberField) => {
	const isIOS = Platform.OS === 'ios';

	return (
		<form.Field
			name={name}
			validators={{
				onChange: ({ value }: { value: number }) =>
					!value || !Number.isFinite(value) || Number(value) < 0
						? noNumberErrorMsg
						: undefined,
			}}
		>
			{(field: any) => (
				<View className='w-full'>
					<TextBase customStyles='text-light-gray text-[16px] mb-1.5'>
						{label}
					</TextBase>
					<View
						className={`flex flex-row border border-[#585858ff] rounded-lg px-4 w-full ${isIOS ? 'py-3' : ''}`}
					>
						<TextInput
							className='text-[18px] text-light flex-1'
							value={String(field.state.value ?? '')}
							onChangeText={(value: string) => {
								const isNumericInput = /^[0-9]*$/.test(value);

								if (!isNumericInput) {
									return;
								}

								const numericValue = value === '' ? 0 : Number(value);

								field.handleChange(numericValue);
							}}
							keyboardType='numeric'
							placeholder={placeholder}
							placeholderTextColor='#ABA7A7'
						/>
					</View>
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
