import { getLocalStorageImage } from '../getLocalStorageImage';

const mockDirectoryExists = jest.fn();
const mockFileExists = jest.fn();

jest.mock('expo-file-system', () => ({
	Paths: {
		document: 'mocked/document/path',
	},
	Directory: jest.fn().mockImplementation(() => ({
		exists: mockDirectoryExists(),
		uri: 'mocked/document/path/players',
	})),
	File: jest.fn().mockImplementation((uri) => ({
		exists: mockFileExists(),
		uri: uri,
	})),
}));

describe('getLocalStorageImage', () => {
	beforeEach(() => {
		jest.clearAllMocks();

		// By default, we assume success paths
		mockDirectoryExists.mockReturnValue(true);
		mockFileExists.mockReturnValue(true);

		// Spy on console warnings to avoid cluttering test output
		jest.spyOn(console, 'warn').mockImplementation(() => {});
		jest.spyOn(console, 'error').mockImplementation(() => {});
	});

	it('should return null if no imageName is provided', () => {
		const result = getLocalStorageImage(undefined);
		expect(result).toBeNull();
	});

	it('should return null and warn if the players directory does not exist', () => {
		mockDirectoryExists.mockReturnValue(false);

		const result = getLocalStorageImage('avatar.jpg');

		expect(result).toBeNull();
		expect(console.warn).toHaveBeenCalledTimes(1);
	});

	it('should return null and warn if the image file does not exist', () => {
		mockFileExists.mockReturnValue(false);

		const result = getLocalStorageImage('missing-avatar.jpg');

		expect(result).toBeNull();
		expect(console.warn).toHaveBeenCalledTimes(1);
	});

	it('should return the correct file URI if both directory and file exist', () => {
		const result = getLocalStorageImage('existing-avatar.jpg');

		expect(result).toBe('mocked/document/path/players/existing-avatar.jpg');
		expect(console.warn).not.toHaveBeenCalled();
	});

	it('should return undefined and log an error if an exception is thrown', () => {
		// Force an error when instantiating Directory
		mockDirectoryExists.mockImplementation(() => {
			throw new Error('Simulated FileSystem error');
		});

		const result = getLocalStorageImage('avatar.jpg');

		expect(result).toBeUndefined(); // Because the catch block doesn't return anything
		expect(console.error).toHaveBeenCalledWith(
			expect.any(String),
			expect.any(Error),
		);
	});
});
