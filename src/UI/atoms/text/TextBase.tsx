import { Text } from 'react-native';

type TextBaseProps = {
	children: string;
	customStyles?: string;
};

const TextBase = ({ children, customStyles = 'text-light' }: TextBaseProps) => {
	return <Text className={`text-[18px] ${customStyles}`}>{children}</Text>;
};

export default TextBase;
