import { Link } from 'expo-router';
import { useRef, useState } from 'react';
import {
	Modal,
	Pressable,
	Text,
	useWindowDimensions,
	View,
} from 'react-native';

import DotsIcon from '@/assets/svg/DotsIcon';

const DotsButton = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [modalPosition, setModalPosition] = useState({ pageX: 0, pageY: 0 });

	const buttonRef = useRef<View>(null);
	const { width: screenWidth } = useWindowDimensions();

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
				presentationStyle='overFullScreen'
				onRequestClose={() => {
					setIsVisible(false);
				}}
			>
				<Pressable
					onPress={() => {
						setIsVisible(false);
					}}
					style={{ flex: 1 }}
				>
					<View
						className='bg-light px-4 py-2 rounded-lg absolute w-[100px]'
						style={{
							top: modalPosition.pageY,
							right: screenWidth - modalPosition.pageX,
						}}
					>
						<Link
							href='/player/create-player'
							asChild
						>
							<Pressable
								onPress={onPressEdit}
								hitSlop={14}
							>
								<Text className='text-lg text-gray'>Edit</Text>
							</Pressable>
						</Link>
					</View>
				</Pressable>
			</Modal>
			<Pressable
				ref={buttonRef}
				onPress={onPressDots}
				hitSlop={14}
			>
				<DotsIcon />
			</Pressable>
		</>
	);
};

export default DotsButton;
