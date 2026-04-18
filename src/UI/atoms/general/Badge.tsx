import { Text, View } from 'react-native';

type TypeBadgeProps = {
	text: string;
	variant?: 'success' | 'warning' | 'info';
};

const Badge = ({ text, variant = 'warning' }: TypeBadgeProps) => {
	const getVariantStyles = () => {
		switch (variant) {
			case 'info':
				return 'bg-light-orange';
			case 'warning':
			default:
				return 'bg-light-orange';
		}
	};

	return (
		<View className={`px-3 py-1 rounded-full self-start ${getVariantStyles()}`}>
			<Text className='text-gray text-sm font-medium'>{text}</Text>
		</View>
	);
};

export default Badge;
