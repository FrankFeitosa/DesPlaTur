import { verifyToken } from '../utils/auth.js'

export const authenticate = (req,res,next) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]        
    try {
        if(!token){
            return res.status(401).json({message: "Token de acesso não fornecido"})
        }
        const decoded = verifyToken(token)
        req.user = decoded
        next() 
    } catch (e) {
        res.status(403).json({
            message: "Token inválido ou expirado"
        })        
    }
}

export const verifyUser = (tipos) => {

    return (req,res,next) => {
        if(tipos.includes(req.user.type)){
            next()
        }else {
            res.status(403).json({message: 'Acesso Negado'})
        }
    }
}