import { useRef, useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

import DotsIcon from '@/assets/svg/DotsIcon';

const DotsButton = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [modalPosition, setModalPosition] = useState({ pageX: 0, pageY: 0 });

	const buttonRef = useRef<View>(null);

	const onPressDots = () => {
		setIsVisible(true);
		if (!buttonRef.current) return;

		buttonRef.current.measure((x, y, width, height, pageX, pageY) => {
			setModalPosition({ pageX, pageY });
		});
	};

	const onPressEdit = () => {
		setIsVisible(false);
	};

	return (
		<>
			<Modal
				visible={isVisible}
				animationType='fade'
				backdropColor={'rgba(0, 0, 0, 0.7)'}
			>
				<View
					className='absolute bg-red-400 p-4 rounded shadow'
					style={{
						top: modalPosition.pageY,
						left: modalPosition.pageX,
					}}
				>
					<Pressable onPress={onPressEdit}>
						<Text>Edit</Text>
					</Pressable>
				</View>
			</Modal>
			<Pressable
				ref={buttonRef}
				onPress={onPressDots}
			>
				<DotsIcon />
			</Pressable>
		</>
	);
};

export default DotsButton;
