import { render, fireEvent, act } from '@testing-library/react-native';
import TournamentHeader from '../TournamentHeader';

const mockUseRouter = jest.fn();

jest.mock('expo-router', () => ({
	useRouter: () => mockUseRouter(),
}));

describe('TournamentHeader Component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly', () => {
		mockUseRouter.mockReturnValue({ back: jest.fn() });
		render(<TournamentHeader imageUrl='http://test.com/image.jpg' />);
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
