import { Request, Response } from "express";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

class AuthController {
  // REGISTRO: Cria um novo usuário
  static async register(req: Request, res: Response): Promise<any> {
    const { name, email, password } = req.body;

    try {
      // 1. Criptografar a senha antes de salvar
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      const user = new User({
        name,
        email,
        password: passwordHash,
      });

      await user.save();
      return res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      return res.status(500).send({ message: "Erro ao cadastrar usuário" });
    }
  }

  // LOGIN: Verifica as credenciais e retorna um Token
  static async login(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;

    try {
      // 1. Verificar se o usuário existe
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({ message: "E-mail ou senha inválidos" });
      }

      // 2. Comparar a senha enviada com a senha do banco (hash)
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).send({ message: "E-mail ou senha inválidos" });
      }

      // 3. Gerar o Token JWT
      const secret = process.env.SECRET as string;
      const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1d" });

      return res.status(200).send({ message: "Login realizado", token });
    } catch (error) {
      return res.status(500).send({ message: "Erro interno no servidor" });
    }
  }
}

export default AuthController;