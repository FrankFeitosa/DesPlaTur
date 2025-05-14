import express from 'express';
import { createAllUsers, deleteUsers, getAllUsers, getIdUser, updateAllUsers } from '../controllers/userController.js';
import { validate } from '../middleware/validate.js';
import { createUserSchema } from '../schemas/userSchemas.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getIdUser);
router.post('/auth/register',validate(createUserSchema), createAllUsers);
router.put('/:id', updateAllUsers);
router.delete('/:id', deleteUsers);


export default router