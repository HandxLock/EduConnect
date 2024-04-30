import { Router } from 'express'
import { createNewUser, getUserByEmail } from '../src/controllers/userController.js'
import validateParamsUser from '../middlewares/valid.params.user.js'
import validateLogin from '../middlewares/valid.login.js'

const router = Router()

router.post('/user', validateParamsUser, createNewUser)
router.get('/user/:email', validateLogin, getUserByEmail)

export default router

// para hacer pruebas de get by email favor usar las siguientes credenciales luego de obtener un token del login: { email: 'ens@educonnect.cl', clave: 'e1234' }
// frente a dudas revisar archivo de seteo de base de datos
