import { renderHook, act } from '@testing-library/react-native';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { usePickImage } from '../usePickImage';

jest.mock('expo-image-picker', () => ({
	requestMediaLibraryPermissionsAsync: jest.fn(),
	launchImageLibraryAsync: jest.fn(),
}));

describe('usePickImage tests', () => {
	const mockOnImagePicked = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
		jest.spyOn(Alert, 'alert').mockImplementation(() => {});
	});

	it('should alert and return early if permission is not granted', async () => {
		(
			ImagePicker.requestMediaLibraryPermissionsAsync as jest.Mock
		).mockResolvedValue({
			granted: false,
		});

		const { result } = renderHook(() => usePickImage(mockOnImagePicked));

		await act(async () => {
			await result.current.pickImage();
		});

		expect(
			ImagePicker.requestMediaLibraryPermissionsAsync,
		).toHaveBeenCalledTimes(1);
		expect(Alert.alert).toHaveBeenCalledWith(
			'Permission required',
			'Permission to access the media library is required.',
		);
		expect(ImagePicker.launchImageLibraryAsync).not.toHaveBeenCalled();
		expect(mockOnImagePicked).not.toHaveBeenCalled();
	});

	it('should call launchImageLibraryAsync and onImagePicked if permission granted and image selected', async () => {
		(
			ImagePicker.requestMediaLibraryPermissionsAsync as jest.Mock
		).mockResolvedValue({
			granted: true,
		});
		(ImagePicker.launchImageLibraryAsync as jest.Mock).mockResolvedValue({
			assets: [{ uri: 'file://mock/path/to/image.jpg' }],
			canceled: false,
		});

		const { result } = renderHook(() => usePickImage(mockOnImagePicked));

		await act(async () => {
			await result.current.pickImage();
		});

		expect(ImagePicker.launchImageLibraryAsync).toHaveBeenCalledWith({
			mediaTypes: ['images'],
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		expect(mockOnImagePicked).toHaveBeenCalledWith(
			'file://mock/path/to/image.jpg',
		);
		expect(Alert.alert).not.toHaveBeenCalled();
	});

	it('should not call onImagePicked if the user cancels the image picker (no assets)', async () => {
		(
			ImagePicker.requestMediaLibraryPermissionsAsync as jest.Mock
		).mockResolvedValue({
			granted: true,
		});
		(ImagePicker.launchImageLibraryAsync as jest.Mock).mockResolvedValue({
			assets: null,
			canceled: true,
		});

		const { result } = renderHook(() => usePickImage(mockOnImagePicked));

		await act(async () => {
			await result.current.pickImage();
		});

		expect(ImagePicker.launchImageLibraryAsync).toHaveBeenCalledTimes(1);
		expect(mockOnImagePicked).not.toHaveBeenCalled();
	});
});
