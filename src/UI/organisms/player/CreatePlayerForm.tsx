import * as ImagePicker from 'expo-image-picker';
import { Alert, View } from 'react-native';
import { useState } from 'react';

import { fetchSearchPlayer } from '@/src/api/chess-com/fetchSearchPlayer';
import { useCreatePlayerForm } from '@/src/hooks/form/player/useCreatePlayerForm';
import { resolveImageUri } from '@/src/utils/image/resolveImageUri';

import FormNumberField from '@/src/UI/atoms/form/FormNumberField';
import FormTextField from '@/src/UI/atoms/form/FormTextField';
import CustomButton from '@/UI/atoms/buttons/CustomButton';
import FormSearchField from '@/src/UI/atoms/form/FormSearchField';
import FormImageField from '@/UI/atoms/form/FormImageField';
import ModalInfo from '@/UI/molecules/modal/ModalInfo';

import type { TypePlayer } from '@/src/types/player';

type TypeCreatePlayerFormValues = {
	kindPlayer: 'manual' | 'online';
	playerToEdit?: TypePlayer | null;
};

const CreatePlayerForm = ({
	kindPlayer,
	playerToEdit,
}: TypeCreatePlayerFormValues) => {
	const [isEmptySearchChessCom, setIsEmptySearchChessCom] = useState(false);

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

	const searchChessComProfile = async (chessProfile?: string) => {
		console.log('chessProfile', chessProfile);

		if (!chessProfile) {
			setIsEmptySearchChessCom(true);
			return;
		}

		await fetchSearchPlayer(chessProfile);
	};

	const handleCleanAllFields = () => {
		form.reset();
	};

	return (
		<View className='gap-10 px-4 items-start pb-16'>
			<ModalInfo
				visible={isEmptySearchChessCom}
				title='Error'
				message='Please enter a Chess.com username'
				onClose={() => setIsEmptySearchChessCom(false)}
			/>
			{kindPlayer === 'online' && (
				<FormSearchField
					form={form}
					name='chessProfileUrl'
					label='Chess.com username: '
					onPressSearch={searchChessComProfile}
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
