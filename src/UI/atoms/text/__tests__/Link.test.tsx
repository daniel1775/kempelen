import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Link from '../Link';

describe('Link Component', () => {
	it('renders correctly with text', () => {
		const { getByText } = render(<Link text='Click me' />);
		expect(getByText('Click me')).toBeTruthy();
	});

	it('calls onPress when pressed', () => {
		const onPressMock = jest.fn();
		const { getByText } = render(<Link text='Click me' onPress={onPressMock} />);
		fireEvent.press(getByText('Click me'));
		expect(onPressMock).toHaveBeenCalled();
	});
});
