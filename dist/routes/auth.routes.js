"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const user_controller_1 = require("../controller/user.controller");
router.get('/users', user_controller_1.getUsers);
router.get('/users/:id', user_controller_1.getUserById);
router.post('/users', user_controller_1.createUser);
exports.default = router;
