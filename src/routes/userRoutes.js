import express from 'express';
import { createAllUsers, getAllUsers, getIdUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getIdUser);
router.post('/create', createAllUsers);


export default router