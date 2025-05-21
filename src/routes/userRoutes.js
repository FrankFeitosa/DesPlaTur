import express from 'express';
import {  login, registerUser } from '../controllers/userController.js';
import { validate } from '../middleware/validate.js';
import { loginSchema, registerSchema } from '../schemas/usersSchemas.js';

const router = express.Router();


router.post('/auth/register',validate(registerSchema), registerUser);
router.post('/auth/login',validate(loginSchema), login);


export default router