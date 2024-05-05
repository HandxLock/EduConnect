import { Router } from 'express'
import { createAsignatura, getAsignaturaById, getAllAsignaturas, updateAsignatura, deleteAsignatura } from '../src/controllers/AdminController.js'

const router = Router()

// Rutas Asignaturas
router.post('/asignatura', createAsignatura)
router.get('/asignatura/:asignatura_id', getAsignaturaById)
router.get('/asignatura', getAllAsignaturas)
router.put('/asignatura/:asignatura_id', updateAsignatura)
router.delete('/asignatura/:asignatura_id', deleteAsignatura)

export default router
