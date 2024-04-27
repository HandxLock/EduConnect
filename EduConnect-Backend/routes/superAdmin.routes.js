import { Router } from 'express'
import { actualizarColegioController, crearColegioController, obtenerColegioController, eliminarColegioController } from '../src/controllers/SuperAdminController.js'

const router = Router()

router.get('/superadmin', obtenerColegioController)
router.post('/superadmin/colegio', crearColegioController)
router.put('/superadmin/colegio/:colegio_id', actualizarColegioController)
router.delete('/superadmin/colegio/:colegio_id', eliminarColegioController)

export default router
