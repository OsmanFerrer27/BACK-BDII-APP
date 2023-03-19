"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getDetalleFactura = exports.getSupervisor = exports.getMesero = exports.getMesa = exports.getFactura = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM cliente ORDER BY id_cliente ASC");
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
});
exports.getUsers = getUsers;
const getFactura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM factura ORDER BY nro_factura ASC");
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
});
exports.getFactura = getFactura;
const getMesa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM mesa ORDER BY nro_mesa ASC");
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
});
exports.getMesa = getMesa;
const getMesero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM mesero ORDER BY id_mesero ASC");
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
});
exports.getMesero = getMesero;
const getSupervisor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM supervisor ORDER BY id_supervisor ASC");
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
});
exports.getSupervisor = getSupervisor;
const getDetalleFactura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM detalle_factura ORDER BY id_detallefactura ASC");
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
});
exports.getDetalleFactura = getDetalleFactura;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query("SELECT * FROM cliente WHERE id_cliente = $1", [id]);
    return res.json(response.rows);
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_cliente, nombre_cliente, apellido_cliente, direccion_cliente, telefono_cliente } = req.body;
    const response = yield database_1.pool.query("INSERT INTO cliente (id_cliente, nombre_cliente, apellido_cliente, direccion_cliente, telefono_cliente) VALUES ($1, $2,$3, $4,$5)", [id_cliente, nombre_cliente, apellido_cliente, direccion_cliente, telefono_cliente]);
    res.json({
        message: "User Added successfully",
        body: {
            user: { id_cliente, nombre_cliente, apellido_cliente, direccion_cliente, telefono_cliente },
        },
    });
});
exports.createUser = createUser;
