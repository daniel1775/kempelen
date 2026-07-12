import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from '@tanstack/react-form';
import { useState } from 'react';

import { useCreateTournamentForm } from '@/src/hooks/form/tournament/useCreateTournamentForm';
import { usePickImage } from '@/src/hooks/form/player/usePickImage';
import { resolveImageUri } from '@/src/utils/image/resolveImageUri';

import FormNumberField from '@/src/UI/atoms/form/FormNumberField';
import FormTextField from '@/src/UI/atoms/form/FormTextField';
import FormImageField from '@/src/UI/atoms/form/FormImageField';
import CustomButton from '@/UI/atoms/buttons/CustomButton';
import TiebreakSortableList from '@/UI/organisms/tiebreak/TiebreakSortableList';
import TiebreakList from '@/UI/organisms/tiebreak/TiebreakList';
import FormTiebreakField from '@/UI/atoms/form/FormTiebreakField';

import type { TypeTournament } from '@/src/types/tournament';
import type { TypeTiebreak } from '@/src/types/tiebreak';

type TypeCreateTournamentFormProps = {
	tournamentToEdit?: TypeTournament | null;
};

const CreateTournamentForm = ({
	tournamentToEdit,
}: TypeCreateTournamentFormProps) => {
	const [showTiebreaks, setShowTiebreaks] = useState(false);
	const [showInfo, setShowInfo] = useState(false);

	const { t } = useTranslation();
	const form = useCreateTournamentForm({
		tournamentToEdit,
	});

	const userTiebreaks = useSelector(
		form.store,
		(state) => state.values.tiebreaks,
	);

	const { pickImage } = usePickImage((uri) => {
		form.setFieldValue('image', uri);
	});

	const handleCleanAllFields = () => {
		form.reset();
	};

	const onCancel = () => {
		setShowTiebreaks(false);
	};

	const onSave = (tiebreaksToUpdate: TypeTiebreak[]) => {
		form.setFieldValue('tiebreaks', tiebreaksToUpdate);
		setShowTiebreaks(false);
	};

	return (
		<View className='gap-10 px-4 items-start pb-16'>
			{userTiebreaks && userTiebreaks.length > 0 && showTiebreaks && (
				<TiebreakSortableList
					allTiebreaks={userTiebreaks}
					onCancel={onCancel}
					onSave={onSave}
				/>
			)}
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
				onEditPress={() => setShowTiebreaks(true)}
				onInfoPress={() => setShowInfo(true)}
			/>
			{userTiebreaks && userTiebreaks.length > 0 && (
				<TiebreakList allTiebreaks={userTiebreaks} />
			)}
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
