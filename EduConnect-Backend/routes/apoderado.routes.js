import { Router } from 'express'
import { obtenerApoderadosController } from '../src/controllers/apoderadoController.js'

const router = Router()

router.get('/admin/apoderados', obtenerApoderadosController)

export default router
