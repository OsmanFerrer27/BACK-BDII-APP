import { Router } from "express";

const router = Router();

import { getUsers, getUserById, createUser, getFactura, getMesa, getMesero, getSupervisor, getDetalleFactura
 } from '../controller/user.controller';

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.get('/mesa', getMesa);
router.get('/factura', getFactura);
router.get('/mesero', getMesero);
router.get('/supervisor', getSupervisor);
router.get('/detalle_factura', getDetalleFactura);

export default router;

