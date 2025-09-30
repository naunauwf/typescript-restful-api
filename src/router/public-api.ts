import express from "express";
import { UserController } from "../controller/user-controller";

export const PublicRouter = express.Router();
PublicRouter.post('/api/users', UserController.register);
PublicRouter.post('/api/users/login', UserController.login);