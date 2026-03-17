import * as ImagePicker from 'expo-image-picker';
import { Alert, View } from 'react-native';

import { useCreatePlayerForm } from '@/src/hooks/form/player/useCreatePlayerForm';
import { resolveImageUri } from '@/src/utils/image/resolveImageUri';

import FormNumberField from '@/src/UI/atoms/player/form/FormNumberField';
import FormTextField from '@/src/UI/atoms/player/form/FormTextField';
import CustomButton from '@/UI/atoms/buttons/CustomButton';
import FormImageField from '@/src/UI/atoms/player/form/FormImageField';
import ChessComProfileField from '@/UI/atoms/player/form/ChessComProfileField';

import type { TypeKindPlayer, TypePlayer } from '@/src/types/player';

type TypeCreatePlayerFormValues = {
	kindPlayer: TypeKindPlayer;
	playerToEdit?: TypePlayer | null;
};

const CreatePlayerForm = ({
	kindPlayer,
	playerToEdit,
}: TypeCreatePlayerFormValues) => {
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

	const handleCleanAllFields = () => {
		form.reset();
	};

	return (
		<View className='gap-10 px-4 items-start pb-16'>
			{kindPlayer === 'online' && (
				<ChessComProfileField
					kindPlayer={kindPlayer}
					form={form}
				/>
			)}
			<FormTextField
				name='name'
				label='Name: '
				form={form}
				noEmptyErrorMsg='Player needs a name'
			/>
			<FormNumberField
				name='elo'
				label='ELO: '
				form={form}
				noNumberErrorMsg='ELO must be numeric'
			/>
			<FormImageField
				name='imageUrl'
				label='Avatar: '
				form={form}
				pickImage={pickImage}
				resolveImageUri={resolveImageUri}
			/>
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
