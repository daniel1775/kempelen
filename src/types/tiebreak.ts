export type TypeTiebreakOption =
	| 'buchholz'
	| 'buchholz-short'
	| 'sonneborn-berger'
	| 'victory-points'
	| 'direct-encounter';

export type TypeTiebreak = {
	id: string;
	name: TypeTiebreakOption;
	description: string;
};
