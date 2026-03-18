export type TypeChessComPlayerResponse = {
	avatar?: string;
	player_id: number;
	'@id': string;
	url: string;
	name?: string;
	username: string;
	followers: number;
	country: string;
	last_online: number;
	joined: number;
	status: string;
	is_streamer: boolean;
	verified: boolean;
	league?: string;
	streaming_platforms?: string[];
};

export type TypeChessComStatsResponse = {
	chess_daily?: {
		last: {
			rating: number;
			date: number;
			rd: number;
		};
		best: {
			rating: number;
			date: number;
			game: string;
		};
		record: {
			win: number;
			loss: number;
			draw: number;
			time_per_move: number;
			timeout_percent: number;
		};
	};
	chess_rapid?: {
		last: {
			rating: number;
			date: number;
			rd: number;
		};
		best: {
			rating: number;
			date: number;
			game: string;
		};
		record: {
			win: number;
			loss: number;
			draw: number;
		};
	};
	chess_bullet?: {
		last: {
			rating: number;
			date: number;
			rd: number;
		};
		best: {
			rating: number;
			date: number;
			game: string;
		};
		record: {
			win: number;
			loss: number;
			draw: number;
		};
	};
	chess_blitz?: {
		last: {
			rating: number;
			date: number;
			rd: number;
		};
		best: {
			rating: number;
			date: number;
			game: string;
		};
		record: {
			win: number;
			loss: number;
			draw: number;
		};
	};
	fide?: number;
	tactics?: {
		highest: {
			rating: number;
			date: number;
		};
		lowest: {
			rating: number;
			date: number;
		};
	};
	puzzle_rush?: {
		best: {
			total_attempts: number;
			score: number;
		};
	};
};
