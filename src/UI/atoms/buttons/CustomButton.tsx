import { Pressable, PressableProps, Text } from 'react-native';

import PlusIcon from '@/assets/svg/PlusIcon';

type TypeCustomButtonProps = PressableProps & {
	text?: string;
	variant?: 'primary' | 'add';
	buttonStyles?: string;
};

const CustomButton = ({
	text,
	variant = 'primary',
	buttonStyles = '',
	...props
}: TypeCustomButtonProps) => {
	return (
		<Pressable
			{...props}
			className={`bg-neutral-gray self-center ${variant === 'primary' ? 'rounded-full px-10 py-4' : 'rounded-full p-4'}`}
		>
			{variant === 'primary' && (
				<Text
					className={`${variant === 'primary' ? 'text-orange' : 'text-black'} text-[18px]`}
				>
					{text}
				</Text>
			)}
			{variant === 'add' && (
				<PlusIcon
					width={25}
					height={25}
				/>
			)}
		</Pressable>
	);
};

export default CustomButton;
