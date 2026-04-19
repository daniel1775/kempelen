import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TournamentTabs from '../TournamentTabs';

describe('TournamentTabs Component', () => {
	it('renders correctly', () => {
		const { getByText } = render(
			<TournamentTabs
				activeTab='rounds'
				onTabChange={() => {}}
			/>
		);
		expect(getByText('Rounds')).toBeTruthy();
		expect(getByText('Standings')).toBeTruthy();
	});

	it('calls onTabChange when a tab is pressed', () => {
		const onTabChangeMock = jest.fn();
		const { getByTestId } = render(
			<TournamentTabs
				activeTab='rounds'
				onTabChange={onTabChangeMock}
			/>
		);
		
		fireEvent.press(getByTestId('tab-standings'));
		expect(onTabChangeMock).toHaveBeenCalledWith('standings');
	});
});
