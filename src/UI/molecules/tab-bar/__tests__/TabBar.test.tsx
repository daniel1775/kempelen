import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import TabBar, { TabBarItem } from '../TabBar';

const MOCK_ITEMS: TabBarItem[] = [
	{ key: 'settings', label: 'SETTINGS' },
	{ key: 'players', label: 'PLAYERS' },
	{ key: 'rounds', label: 'ROUNDS' },
];

describe('TabBar Component', () => {
	it('renders all tab items correctly', () => {
		const { getByText } = render(
			<TabBar
				items={MOCK_ITEMS}
				activeKey='settings'
				onChange={() => {}}
			/>,
		);

		expect(getByText('[SETTINGS]')).toBeTruthy();
		expect(getByText('[PLAYERS]')).toBeTruthy();
		expect(getByText('[ROUNDS]')).toBeTruthy();
	});

	it('calls onChange with the correct key when an item is pressed', () => {
		const mockOnChange = jest.fn();
		const { getByTestId } = render(
			<TabBar
				items={MOCK_ITEMS}
				activeKey='settings'
				onChange={mockOnChange}
			/>,
		);

		fireEvent.press(getByTestId('tab-bar-item-players'));

		expect(mockOnChange).toHaveBeenCalledWith('players');
		expect(mockOnChange).toHaveBeenCalledTimes(1);
	});

	it('renders separators correctly based on active state', () => {
		const { queryByTestId, rerender } = render(
			<TabBar
				items={MOCK_ITEMS}
				activeKey='settings'
				onChange={() => {}}
			/>,
		);

		expect(queryByTestId('tab-bar-separator-0')).toBeNull();
		expect(queryByTestId('tab-bar-separator-1')).toBeTruthy();

		rerender(
			<TabBar
				items={MOCK_ITEMS}
				activeKey='players'
				onChange={() => {}}
			/>,
		);

		expect(queryByTestId('tab-bar-separator-0')).toBeNull();
		expect(queryByTestId('tab-bar-separator-1')).toBeNull();

		rerender(
			<TabBar
				items={MOCK_ITEMS}
				activeKey='rounds'
				onChange={() => {}}
			/>,
		);

		expect(queryByTestId('tab-bar-separator-0')).toBeTruthy();
		expect(queryByTestId('tab-bar-separator-1')).toBeNull();
	});
});
