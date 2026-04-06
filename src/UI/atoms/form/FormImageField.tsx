import { View, Image, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';

import TextBase from '../text/TextBase';
import GarbageIcon from '@/assets/svg/GarbageIcon';

type TypeFormImageField = {
	form: any;
	name: any;
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
		form.setFieldValue(name, '');
	};

	return (
		<form.Field name={name}>
			{(field: any) => (
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
