import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useCreateTournamentForm } from '@/src/hooks/form/tournament/useCreateTournamentForm';
import { usePickImage } from '@/src/hooks/form/player/usePickImage';
import { resolveImageUri } from '@/src/utils/image/resolveImageUri';

import FormNumberField from '@/src/UI/atoms/form/FormNumberField';
import FormTextField from '@/src/UI/atoms/form/FormTextField';
import FormImageField from '@/src/UI/atoms/form/FormImageField';
import CustomButton from '@/UI/atoms/buttons/CustomButton';

const CreateTournamentForm = () => {
	const { t } = useTranslation();
	const form = useCreateTournamentForm();

	const { pickImage } = usePickImage((uri) => {
		form.setFieldValue('image', uri);
	});

	const handleCleanAllFields = () => {
		form.reset();
	};

	return (
		<View className='gap-10 px-4 items-start pb-16'>
			<FormTextField
				name='title'
				label={`${t('title')}: `}
				form={form}
				noEmptyErrorMsg={t('tournamentNeedsATitle')}
			/>
			<FormNumberField
				name='roundsNumber'
				label={`${t('rounds')}: `}
				form={form}
				noNumberErrorMsg={t('roundsMustBeNumeric')}
			/>
			<FormTextField
				name='tiebreak'
				label={`${t('tiebreak')}: `}
				form={form}
			/>
			<FormTextField
				name='scoreByes'
				label={`${t('scoreByes')}: `}
				form={form}
			/>
			<FormTextField
				name='description'
				label={`${t('description')}: `}
				form={form}
			/>
			<FormImageField
				name='image'
				label={`${t('image')}: `}
				form={form}
				pickImage={pickImage}
				resolveImageUri={resolveImageUri}
			/>
			<View className='flex-row w-full justify-center gap-8'>
				<CustomButton
					text={t('save')}
					onPress={() => {
						form.handleSubmit();
					}}
				/>
				<CustomButton
					text={t('clean')}
					onPress={handleCleanAllFields}
				/>
			</View>
		</View>
	);
};

export default CreateTournamentForm;
