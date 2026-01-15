import { useForm } from '@tanstack/react-form';
import { TextInput, View } from 'react-native';

import TextBase from '../../atoms/text/TextBase';

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
		</View>
	);
};

export default CreatePlayerForm;
