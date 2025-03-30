import { z } from 'zod';

export enum RecordType {
    BORN = 'Born on Farm',
    PURCHASED = 'Purchased',
    DONATED = 'Donated',
    TRANSFERRED = 'Transferred',
}

export enum SheepBreed {
    // Meat
    SUFFOLK = 'Suffolk',
    HAMPSHIRE = 'Hampshire',
    DORSET = 'Dorset',
    KATAHDIN = 'Katahdin',
    DORPER = 'Dorper',
    PELIBUEY = 'Pelibuey',
    SANTA_INES = 'Santa Inés',
    MORADA_NOVA = 'Morada Nova',
    BLACKBELLY = 'Blackbelly',

    // Wool
    RAMBOUILLET = 'Rambouillet',
    MERINO = 'Merino',

    // Dual-purpose
    CORRIEDALE = 'Corriedale',
    TEXEL = 'Texel',
    CRIOLLA = 'Criolla',
}

export enum SheepCategory {
    // Male
    LAMB_MALE = 'Lamb (Male)',
    WEANED_LAMB_MALE = 'Weaned Lamb (Male)',
    RAM = 'Ram',
    BREEDING_RAM = 'Breeding Ram',
    MALE_SALE = 'Male for Sale',
    MALE_SLAUGHTER = 'Male for Slaughter',

    // Female
    LAMB_FEMALE = 'Lamb (Female)',
    WEANED_LAMB_FEMALE = 'Weaned Lamb (Female)',
    EWE = 'Ewe',
    PREGNANT_EWE = 'Pregnant Ewe',
    LACTATING_EWE = 'Lactating Ewe',
    EMPTY_EWE = 'Empty Ewe',
    FEMALE_SALE = 'Female for Sale',
    FEMALE_SLAUGHTER = 'Female for Slaughter',
}

export enum SheepStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    SOLD = 'Sold',
    DECEASED = 'Deceased',
    QUARANTINE = 'Quarantine',
}

export enum BirthType {
    SINGLE = 'Single',
    TWIN = 'Twin',
}

export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
}

export const SheepSchema = z.object({
    id: z.string().uuid(),
    tag: z.string(),
    name: z.string().optional(),
    breed: z.nativeEnum(SheepBreed),
    gender: z.nativeEnum(Gender),
    birthDate: z.date(),
    birthType: z.nativeEnum(BirthType),
    weight: z.number().positive(),
    status: z.nativeEnum(SheepStatus),
    category: z.nativeEnum(SheepCategory),
    recordType: z.nativeEnum(RecordType),
    quarantineEndDate: z.date().optional(),
    motherId: z.string().uuid().optional(),
    fatherId: z.string().uuid().optional(),
});

export type Sheep = z.infer<typeof SheepSchema>;

export const SheepPartialSchema = SheepSchema.partial();
