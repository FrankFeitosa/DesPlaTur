import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken';

const saltRounds = 10
const JWT_SECRET = process.env.JWT_SECRET

export async function hashPassword(password){
    return await bcrypt.hash(password, saltRounds)
}

export async function compare(password,hashPassword) {
    return await bcrypt.compare(password, hashPassword)
}

export function generateToken(user,tipo) {
    return jwt.sign(
        {id: user.id, email: user.email, type:tipo},
        JWT_SECRET,
        {expiresIn: '1h'}
    )
}

export function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET)
}