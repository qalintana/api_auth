import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../modules/User";

class UserController {
  async index(request: Request, response: Response) {
    return response.send({ userId: request.userId });
  }

  async store(request: Request, response: Response) {
    const userRepository = getRepository(User);
    const { email, password } = request.body;

    const userExists = await userRepository.findOne({ where: { email } });

    if (userExists) {
      return response.status(409).json({ message: "error letal" });
    }

    const user = userRepository.create({ email, password });
    const userSaved = await userRepository.save(user);

    return response.json(userSaved);
  }
}

export { UserController };
