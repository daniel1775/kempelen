import { render, fireEvent } from '@testing-library/react-native';
import FormNumberField from '../FormNumberField';

describe('FormNumberField tests', () => {
	const mockField = {
		state: {
			value: 5,
			meta: {
				isValid: true,
				errors: [],
			},
		},
		handleChange: jest.fn(),
	};

	const mockForm = {
		Field: ({ children }: any) => children(mockField),
	};

	it('should renders label and number input with value', () => {
		const { getByText, getByDisplayValue } = render(
			<FormNumberField
				form={mockForm}
				name='rounds'
				label='Rondas'
			/>,
		);

		expect(getByText('Rondas')).toBeTruthy();
		expect(getByDisplayValue('5')).toBeTruthy();
	});

	it('should call field.handleChange with numeric value when numeric input is entered', () => {
		const { getByDisplayValue } = render(
			<FormNumberField
				form={mockForm}
				name='rounds'
				label='Rondas'
			/>,
		);

		const input = getByDisplayValue('5');
		fireEvent.changeText(input, '10');
		expect(mockField.handleChange).toHaveBeenCalledWith(10);
	});

	it('should not call field.handleChange when non-numeric input is entered', () => {
		jest.clearAllMocks();
		const { getByDisplayValue } = render(
			<FormNumberField
				form={mockForm}
				name='rounds'
				label='Rondas'
			/>,
		);

		const input = getByDisplayValue('5');
		fireEvent.changeText(input, 'abc');
		expect(mockField.handleChange).not.toHaveBeenCalled();
	});

	it('should renders error message when field is invalid', () => {
		const invalidMockField = {
			...mockField,
			state: {
				...mockField.state,
				meta: {
					isValid: false,
					errors: ['Debe ser un número válido'],
				},
			},
		};

		const invalidForm = {
			Field: ({ children }: any) => children(invalidMockField),
		};

		const { getByText } = render(
			<FormNumberField
				form={invalidForm}
				name='rounds'
				label='Rondas'
			/>,
		);

		expect(getByText('Debe ser un número válido')).toBeTruthy();
	});
});
