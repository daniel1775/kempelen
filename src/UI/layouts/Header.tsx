import { Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';

const Header = () => {
	const insets = useSafeAreaInsets();
	const navigation = useNavigation();

	const navigateBack = () => {
		navigation.goBack();
	};

	return (
		<View
			className='w-full pb-4 bg-gray px-2'
			style={{
				paddingTop: insets.top + 10,
			}}
		>
			<Pressable onPress={navigateBack}>
				<Ionicons
					name='chevron-back'
					size={30}
					color='orange'
				/>
			</Pressable>
		</View>
	);
};

export default Header;
