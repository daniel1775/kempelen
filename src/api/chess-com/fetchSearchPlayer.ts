import axios from 'axios';

export const fetchSearchPlayer = async (nickname: string) => {
	try {
		const response = await axios.get(
			`https://api.chess.com/pub/player/${nickname}`,
		);

		return response.data;
	} catch (err) {
		console.error('[fetchSearchPlayer] error: ', err);
		return null;
	}
};
