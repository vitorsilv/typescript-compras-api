import { Router } from "express";
import { UserController } from "./app/controllers/UserController";

const router: Router = Router();

const firstController = new UserController();

router.post("/user", firstController.post);

export { router };