import { Router } from "express";

import { AuthController } from "./app/controllers/AuthController";
import { UserController } from "./app/controllers/UserController";

import authMiddleware from "./app/middlewares/authMiddleware";

const router = Router();

const userController = new UserController();
const authController = new AuthController();

router.post("/users", userController.store);
router.get("/users", authMiddleware, userController.index);
router.post("/login", authController.autenticate);

export default router;
