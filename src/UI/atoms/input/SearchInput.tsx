import { TextInput, View, Platform } from 'react-native';

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
	const isIOS = Platform.OS === 'ios';

	return (
		<View
			className={`flex flex-row border-b border-orange w-full ${isIOS ? 'pb-3' : ''} ${containerStyle}`}
		>
			<View className='justify-center'>
				<SearchIcon />
			</View>
			<TextInput
				className='ml-4 text-[18px] text-light flex-1'
				placeholder={placeholder}
				placeholderTextColor='#ABA7A7'
				onChangeText={(text) => {
					setValue(text);
				}}
				value={value}
			/>
		</View>
	);
};

export default SearchInput;
