import { z } from 'zod';

export enum MatingStatus {
    PENDING = 'Pending',
    EFFECTIVE = 'Effective',
    INEFFECTIVE = 'Ineffective',
}

export const MatingSchema = z.object({
    id: z.string().uuid(),
    maleId: z.string().uuid(),
    femaleId: z.string().uuid(),
    matingDate: z.date(),
    expectedBirthDate: z.date(),
    status: z.nativeEnum(MatingStatus),
    matingCount: z.number().int().min(1),
    effectivenessCounter: z.number().int().min(0),
    notes: z.string().optional(),
});

export type Mating = z.infer<typeof MatingSchema>;
export const MatingPartialSchema = MatingSchema.partial();
