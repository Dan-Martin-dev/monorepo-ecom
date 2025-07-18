import { z } from 'zod';
import { AddressType } from '@repo/db'; // Import the enum from shared db package

// Zod Schema for validation when creating an address
export const CreateAddressSchema = z.object({
  street: z.string().min(1, 'Street is required'),
  streetNumber: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  province: z.string().min(1, 'Province is required'),
  zipCode: z.string().min(1, 'Zip code is required'),
  neighborhood: z.string().optional(),
  floor: z.string().optional(),
  apartment: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
  type: z.nativeEnum(AddressType, {
    errorMap: () => ({ message: 'Invalid address type. Must be SHIPPING or BILLING' }),
  }),
  isDefault: z.boolean().optional(),
});

// Create a TypeScript type from the Zod schema
export type CreateAddressDto = z.infer<typeof CreateAddressSchema>;