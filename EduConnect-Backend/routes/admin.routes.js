import express from 'express'
import { createAsignatura, getAsignaturaById, getAllAsignaturas, updateAsignatura, deleteAsignatura } from '../src/controllers/AdminController'

const router = express.Router()

// Rutas Asignaturas
router.post('/asignaturas', createAsignatura)
router.get('/asignaturas/:asignatura_id', getAsignaturaById)
router.get('/asignaturas', getAllAsignaturas)
router.put('/asignaturas/:asignatura_id', updateAsignatura)
router.delete('/asignaturas/:asignatura_id', deleteAsignatura)

export default router
