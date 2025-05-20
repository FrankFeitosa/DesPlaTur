import express from 'express';
import { validate } from '../middleware/validate.js';
import { loginSchema, registerSchema } from '../schemas/usersSchemas.js';
import { loginAdmin, registerAdmin } from '../controllers/adminController.js';

const router = express.Router();


router.post('/auth/register-admin',validate(registerSchema), registerAdmin);
router.post('/auth/login',validate(loginSchema), loginAdmin);


export default router;