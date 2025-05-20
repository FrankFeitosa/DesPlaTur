import {PrismaClient} from '@prisma/client';
import { generateToken, hashPassword } from '../utils/auth.js'
import { compare } from 'bcrypt';
const prisma = new PrismaClient();


export const registerAdmin = async (req, res) => {
   try {
    const {name, email,phone, password} = req.body;
    const newPassword = await hashPassword(password);
    const newRegistedUser = await prisma.user.create({
        data: {
            name,
            email,
            phone,
            password: newPassword
        }
    })
    res.status(201).json({
        name: newRegistedUser.name,
        email: newRegistedUser.email,
        phone: newRegistedUser.phone
    });
   } catch (error) {
    res.status(400).json({ message: "Ocorreu um erro ao criar novo usuário", erro: error.message});
   }
};

export const loginAdmin = async(req,res) => {
    try {
        const {email, password} = req.body;
        const user = await prisma.user.findUnique({
            where: { email }
        })
        if(!user){
            res.status(401).json({message: 'Credenciais inválidas!'})
        }
        const isPasswordMatch = await compare(password, user.password)
        if(!isPasswordMatch){
            res.status(401).json({message: 'Credenciais inválidas!'})
        }
        const token = generateToken(user);
        res.json({
            user: {name: user.name, email: user.email},
            token
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao fazer o login',
            erro: error.message
        })
    }
}
