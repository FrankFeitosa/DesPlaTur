import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const createPlace = async (req, res) => {
    try {
        const {name, description, address, type, rating} = req.body
        const dados = await prisma.places.create({
            data: {
                name,
                description, 
                address, 
                type, 
                rating
            }
        })
        res.status(201).json(dados)  
    } catch (e) {
        console.error({message: "Erro ao criar o local/lugar", erro: e.message});
    }
}

export const getPlace = async (req, res) => {
    try {
        const dados = await prisma.places.findMany()
        res.json(dados)  

    } catch (e) {
        console.error({message: "Erro na busca", erro: e.message});
    }
}
export const findPlace = async (req, res) => {
    try {
        const type = req.params.type
        const dados = await prisma.places.findMany({
            where: { type }
        })
        res.json(dados)  
    } catch (e) {
        console.error({message: "Erro na busca", erro: e.message});
    }
}
export const updatePlaces = async (req,res) => {
    try {
        const { id } = req.params;
        const {name, description, address, type, rating} = req.body
        const updatePlace = await prisma.places.update({
            where: { id },
            data: {
                name,
                description, 
                address, 
                type, 
                rating
            }
        })
        res.json(updatePlace)
    } catch (e) {
                console.error({message: "Erro ao atualizar", erro: e.message});
    }
}

export const deletePlaces = async (req,res) => {
    try {
        const { id } = req.params
        const deletePlace = await prisma.places.delete({
            where: { id }
        })
        res.json(deletePlace)
    } catch (e) {
        console.error({message: "Erro ao deletar", erro: e.message});
    }
}

