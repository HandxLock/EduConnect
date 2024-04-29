import { Router } from 'express'
import loginUser from '../src/controllers/loginController.js'
import validateParamsLogin from '../middlewares/valid.params.login.js'

const router = Router()

router.post('/login', validateParamsLogin, loginUser)

export default router
