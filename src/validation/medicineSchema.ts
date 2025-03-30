import { z } from 'zod';

export enum MedicineType {
    VACCINE = 'Vaccine',
    ANTIBIOTIC = 'Antibiotic',
    VITAMIN = 'Vitamin',
    DEWORMER = 'Dewormer',
    OTHER = 'Other',
}

export enum MedicineStatus {
    SCHEDULED = 'Scheduled',
    APPLIED = 'Applied',
    CANCELLED = 'Cancelled',
    MISSED = 'Missed',
}

export const MedicineSchema = z.object({
    id: z.string().uuid(),
    type: z.nativeEnum(MedicineType),
    name: z.string(),
    dosage: z.string(),
    description: z.string().optional(),
    notes: z.string().optional(),
});

export type Medicine = z.infer<typeof MedicineSchema>;
export const MedicinePartialSchema = MedicineSchema.partial();

export const MedicineApplicationSchema = z.object({
    id: z.string().uuid(),
    medicineId: z.string().uuid(),
    sheepId: z.string().uuid(),
    applicationDate: z.date(),
    nextApplicationDate: z.date().optional(),
    status: z.nativeEnum(MedicineStatus),
    notes: z.string().optional(),
});

export type MedicineApplication = z.infer<typeof MedicineApplicationSchema>;
export const MedicineApplicationPartialSchema = MedicineApplicationSchema.partial();
