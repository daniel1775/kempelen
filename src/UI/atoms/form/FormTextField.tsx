import { View, TextInput, Platform } from 'react-native';

import TextBase from '../text/TextBase';

type TypeFormTextField = {
	form: any;
	name: string;
	label: string;
	noEmptyErrorMsg?: string;
	placeholder?: string;
};

const FormTextField = ({
	form,
	name,
	label,
	noEmptyErrorMsg,
	placeholder,
}: TypeFormTextField) => {
	const isIOS = Platform.OS === 'ios';

	return (
		<form.Field
			name={name}
			validators={{
				onChange: ({ value }: { value: string }) =>
					value === '' ? noEmptyErrorMsg : undefined,
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
							onChangeText={field.handleChange}
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

export default FormTextField;
