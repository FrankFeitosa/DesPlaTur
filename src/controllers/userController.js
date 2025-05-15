import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();


export const registerUser = async (req, res) => {
   try {
    const {name, email,phone, password} = req.body;

    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            phone,
            password
        }
    })
    res.status(201).json(newUser);
   } catch (error) {
    res.status(400).json({ message: "Ocorreu um erro ao criar novo usuário", erro: error.message});
   }
};
