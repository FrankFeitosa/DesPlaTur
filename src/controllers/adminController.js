import {PrismaClient} from '@prisma/client';
import { hashPassword } from '../utils/auth.js'
const prisma = new PrismaClient();


export const registerAdmin = async (req, res) => {
   try {
    const {name, email,phone, password} = req.body;
    const newPassword = await hashPassword(password);
    const newRegistedUser = await prisma.admin.create({
        data: {
            name,
            email,
            password: newPassword
        }
    })
    res.status(201).json({
        name: newRegistedUser.name,
        email: newRegistedUser.email,
    });
   } catch (error) {
    res.status(400).json({ message: "Ocorreu um erro ao criar novo usuário", erro: error.message});
   }
};

