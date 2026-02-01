import { z } from 'zod';
import { ValidationRules } from './validation-rules';

export const loginSchema = z.object({
    username: z
        .string()
        .min(1, 'El usuario es requerido')
        .max(ValidationRules.USERNAME.MAX_LENGTH, `Máximo ${ValidationRules.USERNAME.MAX_LENGTH} caracteres`),

    password: z
        .string()
        .min(1, 'La contraseña es requerida')
});

export type LoginFormData = z.infer<typeof loginSchema>;