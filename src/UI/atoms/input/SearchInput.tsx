import { TextInput, View, Platform } from 'react-native';

import SearchIcon from '@/assets/svg/Search';
import AntDesign from '@expo/vector-icons/AntDesign';

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
			className={`flex flex-row border border-1 border-[#585858ff] rounded-lg px-4 w-full ${isIOS ? 'py-3' : ''} ${containerStyle}`}
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
			{value && (
				<AntDesign
					name='close'
					size={18}
					color={'#F9AC52'}
					onPress={() => {
						setValue('');
					}}
				/>
			)}
		</View>
	);
};

export default SearchInput;
