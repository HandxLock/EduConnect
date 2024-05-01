import { Router } from 'express'
import { actualizarColegioController, crearColegioController, obtenerColegioController, eliminarColegioController, crearAdminController, obtenerAdminsController, actualizarAdminsController, eliminarAdminController, asignarColegioController } from '../src/controllers/SuperAdminController.js'

const router = Router()

router.get('/superadmin', obtenerColegioController)
router.post('/superadmin/colegio', crearColegioController)
router.put('/superadmin/colegio/:colegio_id', actualizarColegioController)
router.delete('/superadmin/colegio/:colegio_id', eliminarColegioController)
router.get('/superadmin/admins', obtenerAdminsController)
router.post('/superadmin/admin', crearAdminController)
router.put('/superadmin/admin/:usuario_id', actualizarAdminsController)
router.delete('/superadmin/admin/:usuario_id', eliminarAdminController)
router.get('/superadmin/asignarcolegio/', asignarColegioController)
router.post('/superadmin/asignarcolegio/', asignarColegioController)

export default router
