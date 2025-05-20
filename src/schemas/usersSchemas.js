import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(2, "O nome deve ter no minímo duas letras"),
    email: z.string().email("Email inválido"),
    phone: z.string().trim().min(10, "O telefone deve ter no minímo 10 caracteres").max(15,"O telefone deve ter no máximo 15 caracteres").regex(/^\+?\d{10,15}/, "O telefone deve conter apenas números e pode começãr com "+""),
    password: z.string().min(6,"A senha deve ter pelo menos 6 caracteres").regex(/[A-Z]/,"A senha deve ter pelo menos uma letra maiúscula")
})

export const loginSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(3,'Senha obrigatória')
})


