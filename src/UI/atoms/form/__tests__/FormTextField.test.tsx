import { render, fireEvent } from '@testing-library/react-native';
import FormTextField from '../FormTextField';

describe('FormTextField tests', () => {
	const mockField = {
		state: {
			value: 'Initial value',
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

	it('should renders label and text input with value', () => {
		const { getByText, getByDisplayValue } = render(
			<FormTextField
				form={mockForm}
				name='username'
				label='Nombre de usuario'
			/>,
		);

		expect(getByText('Nombre de usuario')).toBeTruthy();
		expect(getByDisplayValue('Initial value')).toBeTruthy();
	});

	it('should calls field.handleChange when typing in input', () => {
		const { getByDisplayValue } = render(
			<FormTextField
				form={mockForm}
				name='username'
				label='Nombre de usuario'
			/>,
		);

		const input = getByDisplayValue('Initial value');
		fireEvent.changeText(input, 'New value');
		expect(mockField.handleChange).toHaveBeenCalledWith('New value');
	});

	it('should renders error message when field is invalid', () => {
		const invalidMockField = {
			...mockField,
			state: {
				...mockField.state,
				meta: {
					isValid: false,
					errors: ['Campo requerido'],
				},
			},
		};

		const invalidForm = {
			Field: ({ children }: any) => children(invalidMockField),
		};

		const { getByText } = render(
			<FormTextField
				form={invalidForm}
				name='username'
				label='Nombre de usuario'
			/>,
		);

		expect(getByText('Campo requerido')).toBeTruthy();
	});
});
