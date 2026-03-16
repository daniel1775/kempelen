import ModalInfo from '@/src/UI/molecules/modal/ModalInfo';
import FormSearchField from '@/src/UI/atoms/player/form/FormSearchField';
import { useState } from 'react';

import type {
	TypeKindPlayer,
	TypeUseCreatePlayerForm,
} from '@/src/types/player';

type TypeChessComProfileFieldProps = {
	kindPlayer: TypeKindPlayer;
	form: TypeUseCreatePlayerForm;
	searchChessComProfile: (chessProfile?: string) => void;
};

const ChessComProfileField = ({
	kindPlayer,
	form,
	searchChessComProfile,
}: TypeChessComProfileFieldProps) => {
	const [isEmptySearchChessCom, setIsEmptySearchChessCom] = useState(false);

	return (
		<>
			<ModalInfo
				visible={isEmptySearchChessCom}
				title='Error'
				message='Please enter a Chess.com username'
				onClose={() => setIsEmptySearchChessCom(false)}
			/>
			{kindPlayer === 'online' && (
				<FormSearchField
					form={form}
					name='chessProfileUrl'
					label='Chess.com username: '
					onPressSearch={searchChessComProfile}
				/>
			)}
		</>
	);
};

export default ChessComProfileField;
