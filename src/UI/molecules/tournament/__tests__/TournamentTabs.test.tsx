import { render, fireEvent } from '@testing-library/react-native';
import TournamentTabs from '../TournamentTabs';

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string) => key,
	}),
}));

describe('TournamentTabs Component', () => {
	it('renders correctly', () => {
		const { getByText } = render(
			<TournamentTabs
				activeTab='rounds'
				onTabChange={() => {}}
			/>,
		);
		expect(getByText('rounds')).toBeTruthy();
		expect(getByText('standings')).toBeTruthy();
	});

	it('calls onTabChange when a tab is pressed', () => {
		const onTabChangeMock = jest.fn();
		const { getByTestId } = render(
			<TournamentTabs
				activeTab='rounds'
				onTabChange={onTabChangeMock}
			/>,
		);

		fireEvent.press(getByTestId('tab-standings'));
		expect(onTabChangeMock).toHaveBeenCalledWith('standings');
	});
});
