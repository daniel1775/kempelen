import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from '@tanstack/react-form';

import { usePickImage } from '@/src/hooks/form/player/usePickImage';
import { resolveImageUri } from '@/src/utils/image/resolveImageUri';

import FormNumberField from '@/src/UI/atoms/form/FormNumberField';
import FormTextField from '@/src/UI/atoms/form/FormTextField';
import FormImageField from '@/src/UI/atoms/form/FormImageField';
import CustomButton from '@/UI/atoms/buttons/CustomButton';
import FormTiebreakField from '@/UI/atoms/form/FormTiebreakField';

import type { TypeUseCreateTournamentForm } from '@/src/types/tournament';

type TypeCreateTournamentFormProps = {
	onSubmit: () => void;
	form: TypeUseCreateTournamentForm;
};

const CreateTournamentForm = ({
	onSubmit,
	form,
}: TypeCreateTournamentFormProps) => {
	const { t } = useTranslation();

	const userTiebreaks = useSelector(
		form.store,
		(state) => state.values.tiebreaks,
	);

	const { pickImage } = usePickImage((uri) => {
		form.setFieldValue('image', uri);
	});

	return (
		<ScrollView>
			<View className='gap-10 px-4 items-start pb-16 flex-1 h-full'>
				<FormTextField
					name='name'
					label={`${t('name')}: `}
					form={form}
					noEmptyErrorMsg={t('tournamentNeedsAName')}
				/>
				<FormNumberField
					name='roundsNumber'
					label={`${t('rounds')}: `}
					form={form}
					noNumberErrorMsg={t('roundsMustBeNumeric')}
				/>
				<FormTiebreakField
					userTiebreaks={userTiebreaks}
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
				<View className='flex-row w-full justify-end gap-8 mt-8'>
					<CustomButton
						text={t('next')}
						onPress={onSubmit}
						variant='primary-sm'
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default CreateTournamentForm;
