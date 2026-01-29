import { useForm } from '@tanstack/react-form';
import * as ImagePicker from 'expo-image-picker';
import { Alert, Image, Pressable, TextInput, View } from 'react-native';

import GarbageIcon from '@/assets/svg/GarbageIcon';
import CustomButton from '@/UI/atoms/buttons/CustomButton';
import TextBase from '@/UI/atoms/text/TextBase';

type TypeCreatePlayerFormValues = {
	typePlayer: 'manual' | 'online';
};

const CreatePlayerForm = ({ typePlayer }: TypeCreatePlayerFormValues) => {
	const form = useForm({
		defaultValues: {
			name: '',
			chessProfileUrl: '',
			elo: '',
			imageUri: '',
		},
	});
	const inputStyles = 'text-[18px] border-b border-light-gray text-light';
	const labelStyles = 'text-light-gray text-[16px] mb-2';

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
			form.setFieldValue('imageUri', result.assets[0].uri);
		}
	};

	const removeImage = () => {
		form.setFieldValue('imageUri', '');
	};

	const handleSubmit = () => {};

	const handleCleanAllFields = () => {
		form.reset();
	};

	return (
		<View className='gap-10 px-4 items-start'>
			{typePlayer === 'online' && (
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
							value={field.state.value}
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
			<form.Field name='imageUri'>
				{(field) => (
					<View className=''>
						<TextBase customStyles={labelStyles}>Avatar: </TextBase>
						{field.state.value ? (
							<View className='flex-row'>
								<View className='p-4 w-[240px] h-[240px] border border-light-gray'>
									<Image
										source={{ uri: field.state.value }}
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
				<CustomButton text='Save' />
				<CustomButton
					text='Clean'
					onPress={handleCleanAllFields}
				/>
			</View>
		</View>
	);
};

export default CreatePlayerForm;
