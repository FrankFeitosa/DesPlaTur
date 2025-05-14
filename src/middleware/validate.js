import { ZodError } from 'zod';

export function validate(schema){
    return (req, res, next) => {
        try {
            const validateData = schema.parse(req.body);
            req.body = validateData
            next()
        } catch (error) {
            if(error instanceof ZodError){
                return res.status(400).json({
                    message: "Erro de validação",
                    erros: error.errors.map(e => ({
                        path: e.path.join('.'),
                        message: e.message    
                    }))
                })
            }
        }
    }
}