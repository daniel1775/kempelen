import { Pressable, PressableProps, Text } from 'react-native';

import PlusIcon from '@/assets/svg/PlusIcon';

type TypeCustomButtonProps = PressableProps & {
	text?: string;
	variant?: 'primary' | 'add' | 'primary-sm' | 'secondary-sm';
	buttonStyles?: string;
	textStyles?: string;
};

const CustomButton = ({
	text,
	variant = 'primary',
	buttonStyles = '',
	textStyles = '',
	...props
}: TypeCustomButtonProps) => {
	return (
		<Pressable
			{...props}
			className={`bg-neutral-gray self-center 
				${buttonStyles}
				${variant === 'primary-sm' && 'rounded-full px-5 py-3'}
				${variant === 'secondary-sm' && 'bg-orange rounded-full px-5 py-3'}
				${variant === 'primary' && 'rounded-full px-10 py-4'}
				${variant === 'add' && 'rounded-full p-4 border border-orange'} 
			`}
		>
			{(variant === 'primary' ||
				variant === 'primary-sm' ||
				variant === 'secondary-sm') && (
				<Text
					className={`text-center
						${textStyles}
						${variant === 'primary' && 'text-[16px] text-orange'} 
						${variant === 'primary-sm' && 'text-[15px] text-orange'}
						${variant === 'secondary-sm' && 'text-gray'}
					`}
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
