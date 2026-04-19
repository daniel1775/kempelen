import { render, fireEvent, act } from '@testing-library/react-native';
import TournamentHeader from '../TournamentHeader';

const mockUseRouter = jest.fn();

jest.mock('expo-router', () => ({
	useRouter: () => mockUseRouter(),
}));

jest.mock('expo-image', () => {
	const React = require('react');
	const { View } = require('react-native');

	return {
		Image: (props: any) => {
			return <View {...props} />;
		},
	};
});

jest.mock('@expo/vector-icons', () => ({
	__esModule: true,
	default: () => ({}),
	...require('react-native').View,
	Ionicons: 'View',
	MaterialIcons: 'View',
	MaterialCommunityIcons: 'View',
	FontAwesome: 'View',
	Feather: 'View',
	AntDesign: 'View',
}));

describe('TournamentHeader Component', () => {
	it('renders correctly', () => {
		mockUseRouter.mockReturnValue({ back: jest.fn() });
		const { getByTestId } = render(
			<TournamentHeader imageUrl='http://test.com/image.jpg' />,
		);

		expect(getByTestId('back-button')).toBeTruthy();
	});

	it('render calls router.back when back button is pressed', () => {
		const backMock = jest.fn();
		mockUseRouter.mockReturnValue({ back: backMock });

		const { getByTestId } = render(
			<TournamentHeader imageUrl='http://test.com/image.jpg' />,
		);

		act(() => {
			fireEvent.press(getByTestId('back-button'));
		});

		expect(backMock).toHaveBeenCalled();
	});
});
