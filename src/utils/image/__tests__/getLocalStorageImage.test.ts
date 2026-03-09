import { getLocalStorageImage } from '@/utils/image/getLocalStorageImage';

describe('getLocalStorageImage', () => {
	const key = 'test-image-key';
	const mockImageData =
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';

	beforeEach(() => {
		localStorage.clear();
		jest.clearAllMocks();
	});

	it('should return the image data from localStorage if it exists', () => {
		localStorage.setItem(key, mockImageData);
		const result = getLocalStorageImage(key);
		expect(result).toBe(mockImageData);
	});

	it('should return null if the image data does not exist in localStorage', () => {
		const result = getLocalStorageImage('non-existent-key');
		expect(result).toBeNull();
	});
});
