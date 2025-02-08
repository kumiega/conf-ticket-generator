import { z } from 'zod';

const MAX_FILE_SIZE = 500 * 1024;

export const signUpSchema = z.object({
  avatar: z
    .instanceof(File, { message: 'Please upload an image' })
    .refine((file) => file.size <= MAX_FILE_SIZE, { message: 'File must be less than 500kB' }),
  fullName: z
    .string()
    .min(3, { message: 'Full Name is required' })
    .includes(' ', { message: 'Full Name is required' }),
  email: z.string().email({ message: 'Please provide a valid email address' }),
  github: z
    .string()
    .min(2, { message: 'GitHub username is required' })
    .max(40, { message: 'Maximum length is 40 characters including @' })
    .refine((username: string) => username.startsWith('@'), {
      message: 'GitHub username must start with @',
    })
    .transform((username: string) => username.slice(1))
    .refine((username: string) => /^[A-Za-z0-9-]+$/.test(username), {
      message: 'Username may only contain alphanumeric characters or hyphens',
    })
    .refine((username: string) => !username.includes('--'), {
      message: 'Username cannot have multiple consecutive hyphens',
    })
    .refine((username: string) => username[0] !== '-' && username[username.length - 1] !== '-', {
      message: 'Username cannot begin or end with a hyphen',
    }),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
