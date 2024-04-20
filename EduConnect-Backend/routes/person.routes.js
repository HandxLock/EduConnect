import { Router } from "express";
import {createNewPerson, getPersonByID} from "../src/controllers/personaController.js";
import validateParamsPerson from "../middlewares/valid.params.person.js";
import validateLogin from "../middlewares/valid.login.js";

const router = Router();

router.post('/personas', validateParamsPerson, createNewPerson)
router.get('/personas/:email', validateLogin, getPersonByID)

export default router;