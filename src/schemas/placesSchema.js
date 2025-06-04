import { z } from "zod";

export const placeCreateSchema = z.object({
    name: z.string().min(3,"Minimo 3 caracteres"),
    description: z.string().min(3,"Minimo 3 caracteres"),
    address: z.string().min(3,"Minimo 3 caracteres"),
    type: z.string().min(3,"Minimo 3 caracteres"),
    rating: z.number().min(0).max(5)
})
export const placeUpdateSchema = z.object({
    id: z.number(),
    name: z.string().min(3,"Minimo 3 caracteres"),
    description: z.string().min(3,"Minimo 3 caracteres"),
    address: z.string().min(3,"Minimo 3 caracteres"),
    type: z.string().min(3,"Minimo 3 caracteres"),
    rating: z.number().min(0).max(5)
})