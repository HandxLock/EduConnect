import { Router } from 'express'
import { createNewUser, getPersonByID } from '../src/controllers/userController.js'
import validateParamsUser from '../middlewares/valid.params.user.js'
import validateLogin from '../middlewares/valid.login.js'

const router = Router()

router.post('/user', validateParamsUser, createNewUser)
router.get('/user/:email', validateLogin, getPersonByID)

export default router
