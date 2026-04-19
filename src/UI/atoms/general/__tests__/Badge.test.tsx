import React from 'react';
import { render } from '@testing-library/react-native';
import Badge from '../Badge';

describe('Badge Component', () => {
	it('renders correctly with text', () => {
		const { getByText } = render(<Badge text='In Progress' />);
		expect(getByText('In Progress')).toBeTruthy();
	});
});
