export const fetchSearchPlayer = async (nickname: string) => {
	const response = await fetch(`https://api.chess.com/pub/player/${nickname}`);
};
