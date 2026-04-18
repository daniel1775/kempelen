import { Pressable, Text } from 'react-native';

type TypeLinkProps = {
	text: string;
	onPress?: () => void;
};

const Link = ({ text, onPress }: TypeLinkProps) => {
	return (
		<Pressable
			onPress={onPress}
			hitSlop={8}
		>
			<Text className='text-orange underline text-lg'>{text}</Text>
		</Pressable>
	);
};

export default Link;
