import * as ImagePicker from 'expo-image-picker';
import { Alert, Image, Pressable, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';

import { getLocalStorageImage } from '@/src/utils/image/getLocalStorageImage';
import { fetchSearchPlayer } from '@/src/api/chess-com/fetchSearchPlayer';
import { useCreatePlayerForm } from '@/src/hooks/form/player/useCreatePlayerForm';

import FormPlayerNumberField from '@/UI/atoms/player/FormPlayerNumberField';
import FormPlayerTextField from '@/UI/atoms/player/FormPlayerTextField';
import GarbageIcon from '@/assets/svg/GarbageIcon';
import SearchIcon from '@/assets/svg/Search';
import CustomButton from '@/UI/atoms/buttons/CustomButton';
import TextBase from '@/UI/atoms/text/TextBase';

import type { TypePlayer } from '@/src/types/player';

type TypeCreatePlayerFormValues = {
	kindPlayer: 'manual' | 'online';
	playerToEdit?: TypePlayer | null;
};

const CreatePlayerForm = ({
	kindPlayer,
	playerToEdit,
}: TypeCreatePlayerFormValues) => {
	const router = useRouter();

	const form = useCreatePlayerForm({ playerToEdit });

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

	const showToast = () => {
		Toast.show({
			type: 'info',
			text1: 'Hello',
			text2: 'This is some something 👋',
		});
	};

	const searchChessComProfile = async (chessProfile?: string) => {
		if (!chessProfile)
			return Alert.alert(
				'Input required',
				'Please enter a Chess.com username.',
			);

		await fetchSearchPlayer(chessProfile);
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
	const labelStyles = 'text-light-gray text-[16px] mb-3';

	return (
		<View className='gap-10 px-4 items-start'>
			{kindPlayer === 'online' && (
				<form.Field name='chessProfileUrl'>
					{(field) => (
						<View className='w-full'>
							<TextBase customStyles={labelStyles}>
								Chess.com username:
							</TextBase>
							<View className='flex-1 relative'>
								<TextInput
									value={field.state.value}
									onChangeText={field.handleChange}
									className={`${inputStyles} flex-1`}
								/>
								<Pressable
									className='absolute right-0 top-[-6]'
									hitSlop={10}
									onPress={() => {
										showToast();
										// searchChessComProfile(field.state.value);
									}}
								>
									<SearchIcon />
								</Pressable>
							</View>
						</View>
					)}
				</form.Field>
			)}
			<FormPlayerTextField
				name='name'
				label='Name: '
				form={form}
				noEmptyErrorMsg='Player needs a name'
			/>
			<FormPlayerNumberField
				name='elo'
				label='ELO: '
				form={form}
				noNumberErrorMsg='ELO must be numeric'
			/>
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
