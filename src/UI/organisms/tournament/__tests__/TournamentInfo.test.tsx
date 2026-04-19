import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TournamentInfo from '../TournamentInfo';

// Mocking children components to isolate TournamentInfo
jest.mock('@/src/UI/atoms/buttons/DotsButton', () => {
	const { Pressable, Text } = require('react-native');
	return (props: any) => (
		<Pressable
			onPress={props.handlePressEdit}
			testID='mock-dots-button'
		>
			<Text>Dots</Text>
		</Pressable>
	);
});

describe('TournamentInfo Component', () => {
	const props = {
		title: 'Current-tournament',
		description: 'Tournament description',
		status: 'in progress',
		onEdit: jest.fn(),
		onDelete: jest.fn(),
		onMoreInfo: jest.fn(),
	};

	it('renders correctly', () => {
		const { getByText } = render(<TournamentInfo {...props} />);
		expect(getByText('Current-tournament')).toBeTruthy();
		expect(getByText('Tournament description')).toBeTruthy();
		expect(getByText('in progress')).toBeTruthy();
		expect(getByText('more info')).toBeTruthy();
	});

	it('calls onEdit when DotsButton is used', () => {
		const { getByTestId } = render(<TournamentInfo {...props} />);
		fireEvent.press(getByTestId('mock-dots-button'));
		expect(props.onEdit).toHaveBeenCalled();
	});

	it('calls onMoreInfo when link is pressed', () => {
		const { getByText } = render(<TournamentInfo {...props} />);
		fireEvent.press(getByText('more info'));
		expect(props.onMoreInfo).toHaveBeenCalled();
	});
});
