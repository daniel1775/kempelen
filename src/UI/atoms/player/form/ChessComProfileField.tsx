import { useState } from 'react';

import ModalInfo from '@/src/UI/molecules/modal/ModalInfo';
import FormSearchField from '@/src/UI/atoms/player/form/FormSearchField';

import { fetchSearchPlayer } from '@/src/api/chess-com/fetchSearchPlayer';

import type {
	TypeKindPlayer,
	TypeUseCreatePlayerForm,
} from '@/src/types/player';

type TypeChessComProfileFieldProps = {
	kindPlayer: TypeKindPlayer;
	form: TypeUseCreatePlayerForm;
};

const ChessComProfileField = ({
	kindPlayer,
	form,
}: TypeChessComProfileFieldProps) => {
	const [isEmptySearchChessCom, setIsEmptySearchChessCom] = useState(false);

	const searchChessComProfile = async (chessProfile?: string) => {
		if (!chessProfile) {
			setIsEmptySearchChessCom(true);
			return;
		}

		await fetchSearchPlayer(chessProfile);
	};

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
					onPressSearch={() => {
						searchChessComProfile(form.state.values.chessProfileUrl);
					}}
				/>
			)}
		</>
	);
};

export default ChessComProfileField;
