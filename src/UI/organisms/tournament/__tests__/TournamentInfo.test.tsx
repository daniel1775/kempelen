import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TournamentInfo from '../TournamentInfo';

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string) => key,
	}),
}));

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
		const { getByTestId } = render(<TournamentInfo {...props} />);

		expect(getByTestId('tournament-title')).toHaveTextContent(
			'Current-tournament',
		);
		expect(getByTestId('tournament-description')).toHaveTextContent(
			'Tournament description',
		);
		expect(getByTestId('more-info-link').props.children).toBeTruthy();
	});

	it('calls onEdit when DotsButton is used', () => {
		const { getByTestId } = render(<TournamentInfo {...props} />);
		fireEvent.press(getByTestId('mock-dots-button'));

		expect(props.onEdit).toHaveBeenCalled();
	});

	it('calls onMoreInfo when link is pressed', () => {
		const { getByTestId } = render(<TournamentInfo {...props} />);
		fireEvent.press(getByTestId('more-info-link'));

		expect(props.onMoreInfo).toHaveBeenCalled();
	});
});
