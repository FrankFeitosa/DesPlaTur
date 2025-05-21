import express from 'express';
import { validate } from '../middleware/validate.js';
import { loginSchema, registerAdminSchema} from '../schemas/usersSchemas.js';
import { registerAdmin } from '../controllers/adminController.js';
import { login } from '../controllers/userController.js';

const router = express.Router();


router.post('/auth/register-admin',validate(registerAdminSchema), registerAdmin);

export default router;