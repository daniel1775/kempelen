import {
	Text,
	Pressable,
	View,
	LayoutAnimation,
	Platform,
	UIManager,
} from 'react-native';
import Animated, {
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';
import UpCaretIcon from '@/assets/svg/UpCaretIcon';
import { useState } from 'react';

if (
	Platform.OS === 'android' &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

type TypeAccordionProps = {
	title: string;
	children?: React.ReactNode;
};

const Accordion = ({ title, children }: TypeAccordionProps) => {
	const [isExpanded, setIsExpanded] = useState(true);

	const handleToggle = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setIsExpanded((prev) => !prev);
	};

	const arrowStyle = useAnimatedStyle(() => {
		return {
			transform: [{ rotate: withTiming(isExpanded ? '0deg' : '180deg') }],
		};
	});

	return (
		<View className='w-full'>
			<Pressable
				className='flex-row justify-between items-center border-b border-light-gray pb-2 mb-4 mt-8 w-full'
				onPress={handleToggle}
			>
				<Text className='text-orange text-2xl'>{title}</Text>
				<Animated.View style={arrowStyle}>
					<UpCaretIcon />
				</Animated.View>
			</Pressable>
			{isExpanded && <View>{children}</View>}
		</View>
	);
};

export default Accordion;
