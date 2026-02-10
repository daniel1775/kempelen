import { useForm } from '@tanstack/react-form';
import { Directory, File, Paths } from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { Alert, Image, Pressable, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';

import { fetchEditPlayer } from '@/src/api/fetchEditPlayer';
import { fetchCreatePlayer } from '@/src/api/fetchCreatePlayer';
import { getLocalStorageImage } from '@/src/utils/image/getLocalStorageImage';

import GarbageIcon from '@/assets/svg/GarbageIcon';
import CustomButton from '@/UI/atoms/buttons/CustomButton';
import TextBase from '@/UI/atoms/text/TextBase';

import type { TypePlayer, TypePlayerToCreate } from '@/src/types/player';

type TypeCreatePlayerFormValues = {
	kindPlayer: 'manual' | 'online';
	playerToEdit?: TypePlayer | null;
};

const CreatePlayerForm = ({
	kindPlayer,
	playerToEdit,
}: TypeCreatePlayerFormValues) => {
	const router = useRouter();

	const formInitialValues = playerToEdit
		? playerToEdit
		: {
				name: '',
				chessProfileUrl: '',
				elo: '',
				imageUrl: '',
			};

	const form = useForm({
		defaultValues: formInitialValues,
		onSubmit: async ({ value, meta }) => {
			try {
				const dir = new Directory(Paths.document, 'players');
				dir.create({
					overwrite: true,
					idempotent: true,
				});
				let imageFile: File | null = null;

				if (playerToEdit) {
					let imageToUpdate = null;
					if (value.imageUrl && playerToEdit.imageUrl !== value.imageUrl) {
						imageFile = new File(value.imageUrl);
						imageFile.move(dir);
						imageToUpdate = imageFile.name;
					} else if (
						value.imageUrl &&
						playerToEdit.imageUrl === value.imageUrl
					) {
						imageToUpdate = playerToEdit.imageUrl;
					}

					const playerToUpdate: TypePlayerToCreate = {
						name: value.name,
						chessProfileUrl: value.chessProfileUrl ?? '',
						elo: Number(value.elo),
					};
					if (imageToUpdate) {
						playerToUpdate.imageUrl = imageToUpdate;
					}

					await fetchEditPlayer(playerToEdit.id, playerToUpdate);
				} else {
					if (value.imageUrl) {
						imageFile = new File(value.imageUrl);
						imageFile.move(dir);
					}

					const playerToCreate: TypePlayerToCreate = {
						...value,
						elo: Number(value.elo),
						imageUrl: imageFile?.name ? imageFile?.name : '',
					};

					await fetchCreatePlayer(playerToCreate);
				}

				router.back();
			} catch (err) {
				console.error('[submitCreatePlayerForm] error: ', err);
			}
		},
	});

	const pickImage = async () => {
		const permissionResult =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (!permissionResult.granted) {
			Alert.alert(
				'Permission required',
				'Permission to access the media library is required.',
			);
			return;
		}

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (result.assets && result.assets.length > 0) {
			form.setFieldValue('imageUrl', result.assets[0].uri);
		}
	};

	const removeImage = () => {
		form.setFieldValue('imageUrl', '');
	};

	const handleCleanAllFields = () => {
		form.reset();
	};

	const handleRenderImage = (currentImageUrl: string): string => {
		if (!currentImageUrl.startsWith('file://')) {
			const localImageUrl = getLocalStorageImage(currentImageUrl);
			return localImageUrl ?? '';
		}

		return currentImageUrl;
	};

	const inputStyles = 'text-[18px] border-b border-light-gray text-light';
	const labelStyles = 'text-light-gray text-[16px] mb-2';

	return (
		<View className='gap-10 px-4 items-start'>
			{kindPlayer === 'online' && (
				<form.Field name='chessProfileUrl'>
					{(field) => (
						<View className='w-full'>
							<TextBase customStyles={labelStyles}>
								Chess.com username:
							</TextBase>
							<TextInput
								value={field.state.value}
								onChangeText={field.handleChange}
								className={inputStyles}
							/>
						</View>
					)}
				</form.Field>
			)}
			<form.Field
				name='name'
				validators={{
					onChange: ({ value }) =>
						value === '' ? 'Player needs a name' : undefined,
				}}
			>
				{(field) => (
					<View className='w-full'>
						<TextBase customStyles={labelStyles}>Name: </TextBase>
						<TextInput
							value={field.state.value}
							onChangeText={field.handleChange}
							className={inputStyles}
						/>
						{!field.state.meta.isValid && (
							<TextBase customStyles='!text-red-500 mt-2'>
								{field.state.meta.errors.join(', ')}
							</TextBase>
						)}
					</View>
				)}
			</form.Field>
			<form.Field
				name='elo'
				validators={{
					onChange: ({ value }) =>
						!Number.isFinite(Number(value)) ? 'ELO must be numeric' : undefined,
				}}
			>
				{(field) => (
					<View className='w-full'>
						<TextBase customStyles={labelStyles}>ELO: </TextBase>
						<TextInput
							value={String(field.state.value)}
							onChangeText={field.handleChange}
							className={inputStyles}
							keyboardType='numeric'
						/>
						{!field.state.meta.isValid && (
							<TextBase customStyles='!text-red-500 mt-2'>
								{field.state.meta.errors.join(', ')}
							</TextBase>
						)}
					</View>
				)}
			</form.Field>
			<form.Field name='imageUrl'>
				{(field) => (
					<View className=''>
						<TextBase customStyles={labelStyles}>Avatar: </TextBase>
						{field.state.value ? (
							<View className='flex-row'>
								<View className='p-4 w-[240px] h-[240px] border border-light-gray'>
									<Image
										source={{ uri: handleRenderImage(field.state.value) }}
										className='w-full h-full'
									/>
								</View>
								<Pressable
									className='ml-4'
									onPress={removeImage}
								>
									<GarbageIcon
										width={18}
										height={22}
									/>
								</Pressable>
							</View>
						) : (
							<Pressable
								onPress={pickImage}
								className='border border-light-gray w-[240px] h-[240px] items-center justify-center'
							>
								<TextBase customStyles='text-orange underline'>
									Upload Image
								</TextBase>
							</Pressable>
						)}
					</View>
				)}
			</form.Field>
			<View className='flex-row w-full justify-center gap-8'>
				<CustomButton
					text='Save'
					onPress={() => {
						form.handleSubmit();
					}}
				/>
				<CustomButton
					text='Clean'
					onPress={handleCleanAllFields}
				/>
			</View>
		</View>
	);
};

export default CreatePlayerForm;
