import { z } from 'zod';

export const SettingSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, 'Name is required')
        .max(50, 'Name is too long'),
    type: z
        .string()
        .trim()
        .min(1, 'Type is required')
        .max(50, 'Type is too long'),
    config: z
        .string()
        .trim()
        .min(1, 'Config is required')
        .max(50, 'Config is too long'),
    status: z.enum(['Active', 'Inactive']).optional().default('Active'),
});

export const SettingPartialSchema = SettingSchema.partial();
