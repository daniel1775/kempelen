import { Pressable, PressableProps, Text } from 'react-native';

import PlusIcon from '@/assets/svg/PlusIcon';

type TypeCustomButtonProps = PressableProps & {
	text?: string;
	variant?: 'primary' | 'add';
};

const CustomButton = ({
	text,
	variant = 'primary',
	...props
}: TypeCustomButtonProps) => {
	return (
		<Pressable
			{...props}
			className='bg-neutral-gray self-center p-4 rounded-full'
		>
			{variant === 'primary' && (
				<Text
					className={`${variant === 'primary' ? 'text-orange' : 'text-black'} text-lg`}
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
