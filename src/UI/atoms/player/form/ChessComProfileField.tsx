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
	const [isPlayerNotFound, setIsPlayerNotFound] = useState(false);
	const [isPlayerFound, setIsPlayerFound] = useState(false);

	const searchChessComProfile = async (chessProfile?: string) => {
		if (!chessProfile) {
			setIsEmptySearchChessCom(true);
			return;
		}

		const player = await fetchSearchPlayer(chessProfile);

		if (!player) {
			setIsPlayerNotFound(true);
		} else {
			setIsPlayerFound(true);

			const name = player.name || player.username || '';
			const avatar = player.avatar || '';
			// We try to get rapid rating, or blitz, or fide, defaulting to 0
			const elo =
				player.stats?.chess_rapid?.last?.rating ||
				player.stats?.chess_blitz?.last?.rating ||
				player.stats?.fide ||
				0;

			form.setFieldValue('name', name);
			form.setFieldValue('imageUrl', avatar);
			form.setFieldValue('elo', elo);
		}
	};

	return (
		<>
			<ModalInfo
				visible={isEmptySearchChessCom}
				title='Error'
				message='Please enter a Chess.com username'
				onClose={() => setIsEmptySearchChessCom(false)}
			/>
			<ModalInfo
				visible={isPlayerNotFound}
				title='Player not found'
				message='We could not find a player with that Chess.com username. Please check the spelling and try again'
				onClose={() => setIsPlayerNotFound(false)}
			/>
			<ModalInfo
				visible={isPlayerFound}
				title='Player found!'
				message='The player profile was loaded successfully'
				onClose={() => setIsPlayerFound(false)}
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
