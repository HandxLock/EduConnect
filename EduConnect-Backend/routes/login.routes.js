import { Router } from "express";
import loginPerson from "../src/controllers/loginController.js";
import validateParamsLogin from "../middlewares/valid.params.login.js";

const router = Router();

router.post('/login', validateParamsLogin, loginPerson);

export default router