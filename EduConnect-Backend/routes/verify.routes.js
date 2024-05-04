import { Router } from 'express'
import { verifyToken } from '../src/controllers/loginController.js'

const router = Router()
router.get('/verify', verifyToken)

export default router
