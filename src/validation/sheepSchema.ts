import { z } from 'zod';

export enum SheepStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    SOLD = 'Sold',
    DECEASED = 'Deceased'
}

export enum BirthType {
    SINGLE = 'Single',
    TWIN = 'Twin'
}

export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female'
}

export const SheepSchema = z.object({
    id: z.string().uuid(),
    tag: z.string(),
    name: z.string().optional(),
    breed: z.string(),
    gender: z.nativeEnum(Gender),
    birthDate: z.date(),
    birthType: z.nativeEnum(BirthType),
    weight: z.number().positive(),
    status: z.nativeEnum(SheepStatus),
    isBreedingAnimal: z.boolean(),
    isMalton: z.boolean(),
    isBreastfeeding: z.boolean(),
    motherId: z.string().uuid().optional(),
    fatherId: z.string().uuid().optional(),
});

export type Sheep = z.infer<typeof SheepSchema>;

export const SheepPartialSchema = SheepSchema.partial(); 