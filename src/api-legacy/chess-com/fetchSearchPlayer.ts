import axios from 'axios';

import type { TypeChessComPlayerResponse } from '@/src/types/chessCom';

export const fetchSearchPlayer = async (nickname: string) => {
	try {
		const response = await axios.get(
			`https://api.chess.com/pub/player/${nickname}`,
		);

		return response.data as TypeChessComPlayerResponse;
	} catch (err) {
		console.error('[fetchSearchPlayer] error: ', err);
		return null;
	}
};
