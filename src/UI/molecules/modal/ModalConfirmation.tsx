import { Modal, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import CustomButton from '@/UI/atoms/buttons/CustomButton';
import TextBase from '@/UI/atoms/text/TextBase';

type TypeModalConfirmationProps = {
	visible: boolean;
	title: string;
	message: string;
	onCancel: () => void;
	onConfirm: () => void;
	cancelLabel?: string;
	confirmLabel?: string;
};

const ModalConfirmation = ({
	visible,
	title,
	message,
	onCancel,
	onConfirm,
	cancelLabel,
	confirmLabel,
}: TypeModalConfirmationProps) => {
	const { t } = useTranslation();

	return (
		<Modal
			visible={visible}
			transparent
			animationType='fade'
		>
			<View className='flex-1 justify-center items-center bg-black/80 px-6'>
				<View className='bg-gray rounded-2xl p-6 items-center shadow-lg w-full'>
					<TextBase customStyles='text-[24px] font-bold text-orange mb-4 text-center'>
						{title}
					</TextBase>
					<TextBase customStyles='text-light-gray text-lg text-center mb-6'>
						{message}
					</TextBase>

					<View className='flex-row gap-4 w-full justify-center'>
						<CustomButton
							onPress={onCancel}
							text={cancelLabel || t('cancel')}
							buttonStyles=''
						/>
						<CustomButton
							onPress={onConfirm}
							text={confirmLabel || t('accept')}
							buttonStyles=''
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default ModalConfirmation;
