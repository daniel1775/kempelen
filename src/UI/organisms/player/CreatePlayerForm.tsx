import { useForm } from '@tanstack/react-form';
import * as ImagePicker from 'expo-image-picker';
import { Alert, Image, Pressable, TextInput, View } from 'react-native';

import TextBase from '@/UI/atoms/text/TextBase';

const CreatePlayerForm = () => {
	const form = useForm({
		defaultValues: {
			name: '',
			chessProfileUrl: '',
			elo: '',
			imageUri: '',
		},
	});
	const inputStyles =
		'flex-1 text-[18px] border-b border-light-gray text-light-gray';

	const pickImage = async () => {
		const permissionResult =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (!permissionResult.granted) {
			Alert.alert(
				'Permission required',
				'Permission to access the media library is required.'
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
			form.setFieldValue('imageUri', result.assets[0].uri);
		}
	};

	return (
		<View className='gap-10 px-4 items-start'>
			<form.Field name='name'>
				{(field) => (
					<View className='flex-row gap-4 items-end'>
						<TextBase>Name: </TextBase>
						<TextInput
							value={field.state.value}
							onChangeText={field.handleChange}
							className={inputStyles}
						/>
					</View>
				)}
			</form.Field>
			<form.Field name='elo'>
				{(field) => (
					<View className='flex-row gap-4 items-end'>
						<TextBase>ELO: </TextBase>
						<TextInput
							value={field.state.value}
							onChangeText={field.handleChange}
							className={inputStyles}
						/>
					</View>
				)}
			</form.Field>
			<form.Field name='imageUri'>
				{(field) => (
					<View className='flex-row gap-4 items-start flex-1'>
						<TextBase>Avatar: </TextBase>
						{field.state.value ? (
							<View className='p-4 w-[240px] h-[240px] border border-light-gray'>
								<Image
									source={{ uri: field.state.value }}
									className='w-full h-full'
								/>
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
		</View>
	);
};

export default CreatePlayerForm;
