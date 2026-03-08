import { TextInput, View } from 'react-native';

import TextBase from '../text/TextBase';

import type { TypeUseCreatePlayerForm } from '@/src/types/player';

type TypeFormPlayerTextField = {
	form: TypeUseCreatePlayerForm;
};

const FormPlayerTextField = ({ form }: TypeFormPlayerTextField) => {
	const labelStyles = 'text-light-gray text-[16px] mb-3';
	const inputStyles = 'text-[18px] border-b border-light-gray text-light';

	return (
		<form.Field
			name='name'
			validators={{
				onChange: ({ value }) =>
					value === '' ? 'Player needs a name' : undefined,
			}}
		>
			{(field) => (
				<View className='w-full'>
					<TextBase customStyles={labelStyles}>Name: </TextBase>
					<TextInput
						value={field.state.value}
						onChangeText={field.handleChange}
						className={inputStyles}
					/>
					{!field.state.meta.isValid && (
						<TextBase customStyles='!text-red-500 mt-2'>
							{field.state.meta.errors.join(', ')}
						</TextBase>
					)}
				</View>
			)}
		</form.Field>
	);
};

export default FormPlayerTextField;
