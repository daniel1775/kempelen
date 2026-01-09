import { Pressable, PressableProps, Text } from 'react-native';

type TypeCustomButtonProps = PressableProps & {
	text: string;
	variant?: 'primary' | 'secondary';
};

const CustomButton = ({
	text,
	variant = 'primary',
	...props
}: TypeCustomButtonProps) => {
	return (
		<Pressable
			{...props}
			className='bg-neutral-gray self-center px-5 py-3 rounded-full'
		>
			<Text
				className={`${variant === 'primary' ? 'text-orange' : 'text-black'} text-lg`}
			>
				{text}
			</Text>
		</Pressable>
	);
};

export default CustomButton;
