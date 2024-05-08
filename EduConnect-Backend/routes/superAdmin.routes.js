import { Router } from 'express'
import { actualizarColegioController, crearColegioController, obtenerColegioController, eliminarColegioController, crearAdminController, obtenerAdminsController, actualizarAdminsController, eliminarAdminController, asignarColegioController } from '../src/controllers/SuperAdminController.js'
import { validateParamsColegio, validateParamsAdmin, validateParamsAdminAsignarColegio } from '../middlewares/valid.params.Superadmin.js'

// import validateLogin from '../middlewares/valid.login.js'
import validarToken from '../middlewares/validarToken.js'

const router = Router()

router.get('/superadmin', validarToken, obtenerColegioController)
router.post('/superadmin/colegio', validateParamsColegio, crearColegioController)
router.put('/superadmin/colegio/:colegio_id', validateParamsColegio, actualizarColegioController)
router.delete('/superadmin/colegio/:colegio_id', eliminarColegioController)
router.get('/superadmin/admins', obtenerAdminsController)
router.post('/superadmin/admin', validateParamsAdmin, crearAdminController)
router.put('/superadmin/admin/:usuario_id', validateParamsAdmin, actualizarAdminsController)
router.delete('/superadmin/admin/:usuario_id', eliminarAdminController)
router.get('/superadmin/asignarcolegio/', asignarColegioController)
router.post('/superadmin/asignarcolegio/', validateParamsAdminAsignarColegio, asignarColegioController)
export default router
