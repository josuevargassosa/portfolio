import {z} from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'min2').max(100),
  email: z.string().email('invalidEmail'),
  message: z.string().min(10, 'min10').max(2000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
