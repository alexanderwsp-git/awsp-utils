import { z } from 'zod';

export const WeightSchema = z.object({
    id: z.string().uuid(),
    sheepId: z.string().uuid(),
    weight: z.number().positive(),
    measurementDate: z.date(),
    notes: z.string().optional(),
});

export type Weight = z.infer<typeof WeightSchema>;
export const WeightPartialSchema = WeightSchema.partial(); 