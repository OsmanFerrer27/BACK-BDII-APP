import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { pool } from "../database";
import { QueryResult } from "pg";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query(
      "SELECT * FROM cliente ORDER BY id_cliente ASC"
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

export const getFactura = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query(
      "SELECT * FROM factura ORDER BY nro_factura ASC"
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

export const getMesa = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query(
      "SELECT * FROM mesa ORDER BY nro_mesa ASC"
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

export const getMesero = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query(
      "SELECT * FROM mesero ORDER BY id_mesero ASC"
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

export const getSupervisor = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query(
      "SELECT * FROM supervisor ORDER BY id_supervisor ASC"
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

export const getDetalleFactura = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query(
      "SELECT * FROM detalle_factura ORDER BY id_detallefactura ASC"
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};


export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  const response: QueryResult = await pool.query(
    "SELECT * FROM cliente WHERE id_cliente = $1",
    [id]
  );
  return res.json(response.rows);
};

export const createUser = async (req: Request, res: Response) => {
  const { id_cliente , nombre_cliente, apellido_cliente, direccion_cliente, telefono_cliente } = req.body;
  const response = await pool.query(
    "INSERT INTO cliente (id_cliente, nombre_cliente, apellido_cliente, direccion_cliente, telefono_cliente) VALUES ($1, $2,$3, $4,$5)",
    [ id_cliente ,nombre_cliente, apellido_cliente, direccion_cliente, telefono_cliente]
  );
  res.json({
    message: "User Added successfully",
    body: {
      user: { id_cliente, nombre_cliente, apellido_cliente, direccion_cliente, telefono_cliente},
    },
  });
};



