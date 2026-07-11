import { render } from '@testing-library/react-native';

import LoaderScreen from '../LoaderScreen';

describe('Loader Screen tests', () => {
	it('should render loader correctly', () => {
		const { getByTestId } = render(<LoaderScreen />);

		expect(getByTestId('loader-indicator')).toBeTruthy();
	});
});
