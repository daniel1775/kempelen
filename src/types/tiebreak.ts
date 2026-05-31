export type TypeTiebreakOption =
	| 'buchholz'
	| 'buchholz-short'
	| 'sonneborn-berger'
	| 'victory-points'
	| 'direct-encounter';

export type TypeTiebreakResponse = {
	id: string;
	name: TypeTiebreakOption;
};

export type TypeTiebreak = TypeTiebreakResponse & {
	description: string;
};
