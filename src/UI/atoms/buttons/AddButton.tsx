import { useState } from 'react';
import { Pressable, Text } from 'react-native';

import CheckIcon from '@/assets/svg/CheckIcon';
import PlusIcon from '@/assets/svg/PlusIcon';

type AddButtonState = 'add' | 'remove';

type TypeSmallButtonProps = {
	onPressAdd: () => void;
	onPressRemove: () => void;
	initialState?: AddButtonState;
};

const AddButton = ({
	onPressAdd,
	onPressRemove,
	initialState = 'add',
}: TypeSmallButtonProps) => {
	const [buttonState, setButtonState] = useState<AddButtonState>(initialState);

	return (
		<Pressable
			className='bg-gray h-7 px-4 justify-center flex-row items-center rounded-xl gap-2'
			onPress={() => {
				if (buttonState === 'add') {
					setButtonState('remove');
					onPressAdd();
					return;
				}
				if (buttonState === 'remove') {
					setButtonState('add');
					onPressRemove();
					return;
				}
			}}
		>
			{buttonState === 'add' ? <PlusIcon /> : <CheckIcon />}
			<Text className='text-orange text-[13px]'>
				{buttonState === 'add' ? 'Add' : 'Added'}
			</Text>
		</Pressable>
	);
};

export default AddButton;
