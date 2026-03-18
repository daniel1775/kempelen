import { resolveImageUri } from '../resolveImageUri';
// Importamos la función original para poder tipar y usar nuestro mock más adelante
import { getLocalStorageImage } from '../getLocalStorageImage';

// 1. Le decimos a Jest que intercepte y reemplace todo este archivo
jest.mock('../getLocalStorageImage', () => ({
	getLocalStorageImage: jest.fn(),
}));

// 2. Opcional pero recomendadísimo: Le decimos a TypeScript que entienda
// que esta función ahora es un Mock de Jest para no tener alertas rojas.
const mockGetLocalStorageImage = getLocalStorageImage as jest.Mock;

describe('resolveImageUri', () => {
	beforeEach(() => {
		// Limpiamos los mocks antes de cada test para que no arrastren memoria
		jest.clearAllMocks();
	});

	it('should return an empty string if no image is provided', () => {
		const result = resolveImageUri(undefined);
		expect(result).toBe('');
		expect(mockGetLocalStorageImage).not.toHaveBeenCalled();
	});

	it('should return the identical string if it starts with http', () => {
		const uriHttp = 'https://example.com/image.jpg';
		const result = resolveImageUri(uriHttp);

		expect(result).toBe(uriHttp);
		expect(mockGetLocalStorageImage).not.toHaveBeenCalled();
	});

	it('should return the identical string if it starts with file://', () => {
		const uriLocal = 'file://path/to/my/image.jpg';
		const result = resolveImageUri(uriLocal);

		expect(result).toBe(uriLocal);
		// Nos aseguramos de que no haya intentado buscar en el caché
		expect(mockGetLocalStorageImage).not.toHaveBeenCalled();
	});

	it('should call getLocalStorageImage if it does not start with file://', () => {
		// 3. Preparamos nuestro Mock para que devuelva algo falso controlado
		mockGetLocalStorageImage.mockReturnValue('file://resolved/from/cache.jpg');

		const rawImageName = 'avatar.jpg';
		const result = resolveImageUri(rawImageName);

		expect(mockGetLocalStorageImage).toHaveBeenCalledWith('avatar.jpg');
		expect(result).toBe('file://resolved/from/cache.jpg');
	});

	it('should return an empty string if getLocalStorageImage returns null', () => {
		// 4. Simulamos el caso donde la imagen no se encontró
		mockGetLocalStorageImage.mockReturnValue(null);

		const result = resolveImageUri('missing-avatar.jpg');

		expect(mockGetLocalStorageImage).toHaveBeenCalledWith('missing-avatar.jpg');
		expect(result).toBe('');
	});
});
