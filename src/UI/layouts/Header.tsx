import { Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

type TypeHeaderProps = {
	onBack?: () => void;
};

const Header = ({ onBack }: TypeHeaderProps) => {
	const insets = useSafeAreaInsets();
	const router = useRouter();

	const navigateBack = () => {
		if (onBack) {
			onBack();
		} else {
			router.back();
		}
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
