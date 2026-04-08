import { Directory, File, Paths } from 'expo-file-system';

export const getLocalStorageImage = (imageName?: string) => {
	try {
		if (!imageName) {
			return null;
		}

		const dir = new Directory(Paths.document);

		if (!dir.exists) {
			console.warn(
				`[getLocalStorageImage] directory ${dir.uri} does not exist`,
			);
			return null;
		}

		const imageFile = new File(dir.uri + '/' + imageName);

		if (!imageFile.exists) {
			console.warn(
				`[getLocalStorageImage] image file ${imageFile.uri} does not exist`,
			);
			return null;
		}

		return imageFile.uri;
	} catch (err) {
		console.error('[getLocalStorageImage] error: ', err);
	}
};
