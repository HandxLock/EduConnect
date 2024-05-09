import { Router } from 'express'
import { actualizarColegioController, crearColegioController, obtenerColegioController, eliminarColegioController, crearAdminController, obtenerAdminsController, actualizarAdminsController, eliminarAdminController, asignarColegioController } from '../src/controllers/SuperAdminController.js'
import { validateParamsColegio, validateParamsAdmin, validateParamsAdminAsignarColegio } from '../middlewares/valid.params.Superadmin.js'
import { validarPermisoLecturaAdmin, validarPermisoLecturaColegio } from '../middlewares/validarPermisosLectura.js'
import { validarPermisoCRUDAdmin, validarPermisoCRUDColegio } from '../middlewares/validarPermisosCRUD.js'

// import validateLogin from '../middlewares/valid.login.js'
import validarToken from '../middlewares/validarToken.js'

const router = Router()

router.get('/superadmin', validarToken, validarPermisoLecturaColegio, obtenerColegioController)
router.post('/superadmin/colegio', validateParamsColegio, validarPermisoCRUDColegio, crearColegioController)
router.put('/superadmin/colegio/:colegio_id', validateParamsColegio, validarPermisoCRUDColegio, actualizarColegioController)
router.delete('/superadmin/colegio/:colegio_id', validarPermisoCRUDColegio, eliminarColegioController)
router.get('/superadmin/admins', validarPermisoLecturaAdmin, obtenerAdminsController)
router.post('/superadmin/admin', validateParamsAdmin, validarPermisoCRUDAdmin, crearAdminController)
router.put('/superadmin/admin/:usuario_id', validateParamsAdmin, validarPermisoCRUDAdmin, actualizarAdminsController)
router.delete('/superadmin/admin/:usuario_id', validarPermisoCRUDAdmin, eliminarAdminController)
router.get('/superadmin/asignarcolegio/', validarPermisoLecturaAdmin, validarPermisoLecturaColegio, asignarColegioController)
router.post('/superadmin/asignarcolegio/', validateParamsAdminAsignarColegio, validarPermisoCRUDAdmin, asignarColegioController)
export default router
