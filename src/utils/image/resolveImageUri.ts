import { getLocalStorageImage } from '@/src/utils/image/getLocalStorageImage';

export const resolveImageUri = (currentImageUrl?: string): string => {
	if (!currentImageUrl) {
		return '';
	}

	if (currentImageUrl.startsWith('http')) {
		return currentImageUrl;
	}

	if (!currentImageUrl.startsWith('file://')) {
		const localImageUrl = getLocalStorageImage(currentImageUrl);
		return localImageUrl ?? '';
	}

	return currentImageUrl;
};
