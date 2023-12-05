import { z } from 'zod';

export const schemaTodo = z.object({
	userId: z.number(),
	id: z.number(),
	title: z.string(),
	completed: z.boolean()
});

export type TodoModel = z.infer<typeof schemaTodo>;