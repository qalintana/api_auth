import { Request, Response } from "express";
import { getRepository } from "typeorm";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { User } from "../modules/User";

class AuthController {
  async autenticate(request: Request, response: Response) {
    const userRepository = getRepository(User);
    const { email, password } = request.body;

    const user = await userRepository.findOne({ where: { email } });
    if (!user) {
      return response.status(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return response.status(401);
    }

    const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1d" });
    const { email: username } = user;

    return response.json({ username, token });
  }
}

export { AuthController };
