import { render, screen } from '@testing-library/react-native';

import TournamentHeader from '../TournamentHeader';

const mockUseRouter = jest.fn();

jest.mock('expo-router', () => ({
	useRouter: () => mockUseRouter(),
}));

describe('TournamentHeader tests', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly', () => {
		mockUseRouter.mockReturnValue({ back: jest.fn() });
		render(<TournamentHeader imageUrl='http://test.com/image.jpg' />);
	});

	it('renders default image when no image is provided', () => {
		mockUseRouter.mockReturnValue({ back: jest.fn() });
		render(<TournamentHeader imageUrl='' />);
		const defaultImage = screen.getByTestId('default-image');
		expect(defaultImage).toBeTruthy();
	});
});
