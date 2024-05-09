import { Router } from 'express'
import { crearObservacion, modificarObservacion, obtenerObservacion, eliminarObservacion, obtenerObservacionUsuarioId } from '../src/controllers/observacionesController.js'
import validarObservacion from '../middlewares/validarObservacion.js'
const router = Router()

router.post('/observacion', validarObservacion, crearObservacion)
router.get('/observacion', obtenerObservacion)
router.put('/observacion/:id', validarObservacion, modificarObservacion)
router.delete('/observacion/:id', eliminarObservacion)
router.get('/admin/alumnos/observaciones/:usuario_id', obtenerObservacionUsuarioId)
export default router
