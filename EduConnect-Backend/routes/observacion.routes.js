import { Router } from 'express'
import { crearObservacion, modificarObservacion, obtenerObservacion, eliminarObservacion } from '../src/controllers/observacionesController.js'

const router = Router()

router.post('/observacion', crearObservacion)
router.get('/observacion', obtenerObservacion)
router.put('/observacion/:id', modificarObservacion)
router.delete('/observacion/:id', eliminarObservacion)

export default router
