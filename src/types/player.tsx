import * as z from 'zod';

export const PlayerSchema = z.object({
	username: z.string(),
	xp: z.number(),
});
