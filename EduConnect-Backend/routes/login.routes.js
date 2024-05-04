import { Router } from 'express'
import { loginUser, logout } from '../src/controllers/loginController.js'
import validateParamsLogin from '../middlewares/valid.params.login.js'

const router = Router()

router.post('/login', validateParamsLogin, loginUser)
router.post('/logout', logout)

export default router

// para hacer pruebas de login favor usar las siguientes credenciales: { email: 'ens@educonnect.cl', clave: 'e1234' }
// frente a dudas revisar archivo de seteo de base de datos
