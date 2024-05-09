import { Router } from 'express'
import { obtenerApoderadosController } from '../src/controllers/apoderadoController.js'
import { validarPermisoLecturaApoderados } from '../middlewares/validarPermisosLectura.js'

const router = Router()

router.get('/admin/apoderados', validarPermisoLecturaApoderados, obtenerApoderadosController)

export default router
