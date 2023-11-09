import { Router } from "express";
import { FirstController } from "./app/controllers/FirstController";

const router: Router = Router();

const firstController = new FirstController();
//Routes
router.get("/", firstController.home);

export { router };