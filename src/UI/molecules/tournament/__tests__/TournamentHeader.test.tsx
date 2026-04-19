import { render } from '@testing-library/react-native';
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
});
