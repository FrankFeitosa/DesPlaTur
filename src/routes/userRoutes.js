import express from 'express';
import {  loginUser, registerUser } from '../controllers/userController.js';
import { validate } from '../middleware/validate.js';
import { loginUserRegisterSchema, registerUserSchema } from '../schemas/userSchemas.js';

const router = express.Router();


router.post('/auth/register',validate(registerUserSchema), registerUser);
router.post('/auth/login',validate(loginUserRegisterSchema), loginUser);



export default router