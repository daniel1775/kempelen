import { Pressable, Text, View } from 'react-native';

type TypeRadioButtonProps = {
	label: string;
	onPress: () => void;
	isActive: boolean;
};

const RadioButton = ({ label, onPress, isActive }: TypeRadioButtonProps) => {
	const activeButtonStyles = 'bg-orange';
	const inactiveButtonStyles = 'bg-gray border border-orange';

	return (
		<View className='flex-row items-center'>
			<Pressable
				className={`rounded-full w-[26px] h-[26px] mr-3 ${isActive ? activeButtonStyles : inactiveButtonStyles} justify-center items-center`}
				onPress={onPress}
			>
				<View
					className={`${isActive ? 'bg-gray' : 'bg-orange'} w-[6px] h-[6px] rounded-full`}
				/>
			</Pressable>
			<Text className='text-light text-[17px]'>{label}</Text>
		</View>
	);
};

export default RadioButton;
