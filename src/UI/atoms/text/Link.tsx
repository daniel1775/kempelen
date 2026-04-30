import { Pressable, Text } from 'react-native';

type TypeLinkProps = {
	text: string;
	onPress?: () => void;
	testID?: string;
};

const Link = ({ text, onPress, testID }: TypeLinkProps) => {
	return (
		<Pressable
			onPress={onPress}
			hitSlop={8}
			testID={testID}
		>
			<Text className='text-orange underline text-lg'>{text}</Text>
		</Pressable>
	);
};

export default Link;
