import { View } from 'react-native';

import { useCreatePlayerForm } from '@/src/hooks/form/player/useCreatePlayerForm';
import { usePickImage } from '@/src/hooks/form/player/usePickImage';
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

	const { pickImage } = usePickImage((uri) => {
		form.setFieldValue('imageUrl', uri);
	});

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
