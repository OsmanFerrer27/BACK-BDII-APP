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
  const { email , nom_cliente, apellido_cliente, direccion_cliente, telefono_cliente, password } = req.body;
  const response = await pool.query(
    "INSERT INTO cliente (id_cliente, nom_cliente, apellido_cliente, direccion_cliente, telefono_cliente, password) VALUES ($1, $2,$3, $4,$5,$6)",
    [ email ,nom_cliente, apellido_cliente, direccion_cliente, telefono_cliente,password]
  );
  res.json({
    message: "User Added successfully",
    body: {
      user: { email, nom_cliente, apellido_cliente, direccion_cliente, telefono_cliente,password },
    },
  });
};



