import { TextInput, View } from 'react-native';

import SearchIcon from '@/assets/svg/Search';

type TypeSearchInputProps = {
	value: string;
	setValue: (text: string) => void;
	placeholder?: string;
	containerStyle?: string;
};

const SearchInput = ({
	value,
	setValue,
	placeholder,
	containerStyle,
}: TypeSearchInputProps) => {
	return (
		<View
			className={`flex flex-row border-b border-orange w-full ${containerStyle}`}
		>
			<View className='mb-3'>
				<SearchIcon />
			</View>
			<TextInput
				className='ml-4 mb-2 text-[18px] text-light flex-1'
				placeholder={placeholder}
				onChangeText={(text) => {
					setValue(text);
				}}
				value={value}
			/>
		</View>
	);
};

export default SearchInput;
