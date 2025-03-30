import { z } from 'zod';

export const PregnancyCheckSchema = z.object({
    matingId: z.string(),
    checkDate: z.date(),
    isPregnant: z.boolean(),
    notes: z.string().optional(),
    nextCheckDate: z.date().optional(),
});

export type PregnancyCheck = z.infer<typeof PregnancyCheckSchema>;
