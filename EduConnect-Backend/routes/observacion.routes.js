import { Router } from 'express'
import { crearObservacion, modificarObservacion, obtenerObservacion, eliminarObservacion } from '../src/controllers/observacionesController.js'
import validarObservacion from '../middlewares/validarObservacion.js'
const router = Router()

router.post('/observacion', validarObservacion, crearObservacion)
router.get('/observacion', obtenerObservacion)
router.put('/observacion/:id', validarObservacion, modificarObservacion)
router.delete('/observacion/:id', eliminarObservacion)

export default router
