import axios from 'axios';

import type { TypeChessComStatsResponse } from '@/src/types/chessComStats';

export const fetchSearchPlayerStats = async (nickname: string) => {
	try {
		const response = await axios.get(
			`https://api.chess.com/pub/player/${nickname}/stats`,
		);

		return response.data as TypeChessComStatsResponse;
	} catch (err) {
		console.error('[fetchSearchPlayerStats] error: ', err);
		return null;
	}
};
