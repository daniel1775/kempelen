import { File, Directory, Paths } from 'expo-file-system';

export const saveImageLocally = (imageUri?: string) => {
	const dir = new Directory(Paths.document);
	dir.create({
		overwrite: true,
		idempotent: true,
	});

	if (!imageUri) {
		return '';
	}
	if (imageUri.startsWith('http')) {
		return imageUri;
	}

	const imageFile = new File(imageUri);
	imageFile.move(dir);

	return imageFile.name;
};
