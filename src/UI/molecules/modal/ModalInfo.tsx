import { Modal, Text, View, Pressable } from 'react-native';

import CustomButton from '@/UI/atoms/buttons/CustomButton';
import TextBase from '@/UI/atoms/text/TextBase';
import React from 'react';

type TypeModalInfoProps = {
	visible: boolean;
	title: string;
	message: string;
	onClose: () => void;
};

const ModalInfo = ({
	visible,
	title,
	message,
	onClose,
}: TypeModalInfoProps) => {
	return (
		<Modal
			visible={visible}
			transparent
			animationType='fade'
		>
			<View className='flex-1 justify-center items-center bg-black/80 px-6'>
				<View className='bg-gray rounded-2xl p-6 items-center shadow-lg'>
					<TextBase customStyles='text-[24px] font-bold text-orange mb-4 text-center'>
						{title}
					</TextBase>
					<TextBase customStyles='text-light-gray text-lg text-center mb-6'>
						{message}
					</TextBase>

					<CustomButton
						onPress={onClose}
						text='Accept'
					/>
				</View>
			</View>
		</Modal>
	);
};

export default ModalInfo;
