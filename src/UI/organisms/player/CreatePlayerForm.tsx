import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useRouter } from 'expo-router';

import { useCreatePlayerForm } from '@/src/hooks/form/player/useCreatePlayerForm';
import { usePickImage } from '@/src/hooks/form/player/usePickImage';
import { resolveImageUri } from '@/src/utils/image/resolveImageUri';

import FormNumberField from '@/src/UI/atoms/form/FormNumberField';
import FormTextField from '@/src/UI/atoms/form/FormTextField';
import FormImageField from '@/src/UI/atoms/form/FormImageField';
import CustomButton from '@/UI/atoms/buttons/CustomButton';
import ChessComProfileField from '@/UI/atoms/player/form/ChessComProfileField';
import LoaderScreen from '@/UI/organisms/loader/LoaderScreen';

import type { TypeKindPlayer, TypePlayer } from '@/src/types/player';

type TypeCreatePlayerFormValues = {
	kindPlayer: TypeKindPlayer;
	playerToEdit?: TypePlayer | null;
};

const CreatePlayerForm = ({
	kindPlayer,
	playerToEdit,
}: TypeCreatePlayerFormValues) => {
	const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

	const { t } = useTranslation();
	const router = useRouter();
	const form = useCreatePlayerForm({ playerToEdit });

	const { pickImage } = usePickImage((uri) => {
		form.setFieldValue('imageUrl', uri);
	});

	const handleCleanAllFields = () => {
		form.reset();
	};

	const handleSubmitPlayer = async () => {
		try {
			setIsLoadingSubmit(true);

			form.handleSubmit();
			router.back();
		} catch (e) {
			console.error("[submitCreatePlayer] error: ", e);
		} finally {
			setIsLoadingSubmit(false);
		}
	}

	if (isLoadingSubmit) {
			return (
				<LoaderScreen />
			)
	}

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
				label={`${t('name')}: `}
				form={form}
				noEmptyErrorMsg={t('playerNeedsAName')}
			/>
			<FormNumberField
				name='elo'
				label={`${t('elo')}: `}
				form={form}
				noNumberErrorMsg={t('eloMustBeNumeric')}
			/>
			<FormImageField
				name='imageUrl'
				label={`${t('avatar')}: `}
				form={form}
				pickImage={pickImage}
				resolveImageUri={resolveImageUri}
			/>
			<View className='flex-row w-full justify-center gap-8'>
				<CustomButton
					text={t('save')}
					onPress={handleSubmitPlayer}
				/>
				<CustomButton
					text={t('clean')}
					onPress={handleCleanAllFields}
				/>
			</View>
		</View>
	);
};

export default CreatePlayerForm;
