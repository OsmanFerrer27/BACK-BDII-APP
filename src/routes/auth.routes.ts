import { Router } from "express";

const router = Router();

import { getUsers, getUserById, createUser } from '../controller/user.controller';

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);



export default router;

