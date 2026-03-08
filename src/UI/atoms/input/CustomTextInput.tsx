import { TextInput, TextInputProps } from 'react-native';

const CustomTextInput = ({ className, ...props }: TextInputProps) => {
	const inputStyles = 'text-[18px] border-b border-light-gray text-light';

	return (
		<TextInput
			className={`${inputStyles} ${className || ''}`}
			{...props}
		/>
	);
};

export default CustomTextInput;
