import { Router } from 'express'
import { crearObservacion, modificarObservacion, obtenerObservacion, eliminarObservacion } from '../src/controllers/observacionesController.js'
import validarObservacion from '../middlewares/validarObservacion.js'
import { validarPermisoLecturaObersvaciones } from '../middlewares/validarPermisosLectura.js'
import { validarPermisoCRUDObersvaciones } from '../middlewares/validarPermisosCRUD.js'

const router = Router()

router.post('/observacion', validarObservacion, validarPermisoCRUDObersvaciones, crearObservacion)
router.get('/observacion', validarPermisoLecturaObersvaciones, obtenerObservacion)
router.put('/observacion/:id', validarObservacion, validarPermisoCRUDObersvaciones, modificarObservacion)
router.delete('/observacion/:id', validarPermisoCRUDObersvaciones, eliminarObservacion)

export default router
