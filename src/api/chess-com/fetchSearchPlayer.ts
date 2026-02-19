export const fetchSearchPlayer = async (nickname: string) => {
	try {
		const response = await fetch(
			`https://api.chess.com/pub/player/${nickname}`,
		);

		const data = await response.json();

		return data;
	} catch (err) {
		console.error('[fetchSearchPlayer] error: ', err);
		return null;
	}
};
