import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async (req,res) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: "Usuários inexistentes", erro: error.message})
    }
}

export const getIdUser = async (req, res) => {
    const id = req.params.id
    try {
        const userId = await prisma.user.findUnique({
            where:{ id: Number(id) }
        })
        res.status(200).json(userId)
    } catch (error) {
        console.error({message: "Id não encontrado", erro: error.message});
    }
}

export const createAllUsers = async (req, res) => {
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

export const updateAllUsers = async (req, res) => {
    const id = req.params.id
    const {name, email, phone, password} = req.body
    try {
        const updatedUser = await prisma.user.update({
            where: {id: parseInt(id)},
            data: {name,  email, phone, password}
        })
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(400).json({
            message: "erro ao atualizar o usuário",
            erro: error.message
        })
    }
}

export const deleteUsers = async (req, res) => {
    try {
        const id = req.params.id
        const deletedUser = await prisma.user.delete({
            where: {id: Number(id) }
        });
        res.status(204).send()
    } catch (error) {
        res.status(404).json({message: "Usuário não encontrado.", erro: error.message})
    }
};

