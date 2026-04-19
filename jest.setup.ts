jest.mock('expo-image', () => {
	const { View } = require('react-native');
	return {
		Image: View,
	};
});

jest.mock('@expo/vector-icons', () => {
	const { View } = require('react-native');
	return {
		__esModule: true,
		default: View,
		Ionicons: View,
		MaterialIcons: View,
		MaterialCommunityIcons: View,
		FontAwesome: View,
		Feather: View,
		AntDesign: View,
	};
});
