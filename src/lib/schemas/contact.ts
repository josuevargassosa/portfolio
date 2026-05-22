import {z} from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'min2').max(100),
  email: z.string().email('invalidEmail'),
  message: z.string().min(10, 'min10').max(2000),
  // Honeypot: real users never fill this (it's hidden via CSS + aria-hidden).
  // Bots that auto-fill all form fields trip it and get silently dropped.
  website: z.string().max(0).optional().or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactSchema>;
