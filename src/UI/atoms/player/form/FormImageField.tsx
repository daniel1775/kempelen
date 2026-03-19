import { View, Image, Pressable } from 'react-native';

import TextBase from '@/UI/atoms/text/TextBase';
import GarbageIcon from '@/assets/svg/GarbageIcon';
import { useTranslation } from 'react-i18next';

import type {
	TypeFormPlayerFieldsName,
	TypeUseCreatePlayerForm,
} from '@/src/types/player';

type TypeFormImageField = {
	form: TypeUseCreatePlayerForm;
	name: TypeFormPlayerFieldsName;
	label: string;
	pickImage: () => void;
	resolveImageUri: (currentImageUrl: string) => string;
};

const FormImageField = ({
	form,
	name,
	label,
	pickImage,
	resolveImageUri,
}: TypeFormImageField) => {
	const { t } = useTranslation();
	const labelStyles = 'text-light-gray text-[16px] mb-3';

	const removeImage = () => {
		form.setFieldValue('imageUrl', '');
	};

	return (
		<form.Field name={name}>
			{(field) => (
				<View>
					<TextBase customStyles={labelStyles}>{label}</TextBase>
					{field.state.value ? (
						<View className='flex-row'>
							<View className='p-4 w-[240px] h-[240px] border border-light-gray'>
								<Image
									source={{ uri: resolveImageUri(String(field.state.value)) }}
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
								{t('uploadImage')}
							</TextBase>
						</Pressable>
					)}
				</View>
			)}
		</form.Field>
	);
};

export default FormImageField;
