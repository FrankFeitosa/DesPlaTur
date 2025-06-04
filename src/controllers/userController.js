import {PrismaClient} from '@prisma/client';
import { generateToken, hashPassword } from '../utils/auth.js'
import { compare } from 'bcrypt';
const prisma = new PrismaClient();


export const registerUser = async (req, res) => {
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

export const login = async(req,res) => {
    try {
        const {email, password} = req.body;

        const user = await prisma.user.findUnique({
            where: { email }
        })
        const admin = await prisma.admin.findUnique({
            where: { email }
        })
        if(user){
            const isPasswordMatch = await compare(password, user.password)
            if(isPasswordMatch){
                const token = generateToken(user,"user");
                res.json({
                    message: 'Credenciais válidas!',
                    name: user.name,
                    email: user.email,
                    token
                })
            }
        }else if(admin){
            const isPasswordMatch = await compare(password, admin.password)
            if(isPasswordMatch){
                const token = generateToken(admin,"admin");
                res.json({
                    message: 'Credenciais válidas!',
                    name: admin.name,
                    email: admin.email,
                    token
                })
            }
        }else {
            res.status(401).json({message: 'Credenciais inválidas!'})
        }
        
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao fazer o login',
            erro: error.message
        })
    }
}
