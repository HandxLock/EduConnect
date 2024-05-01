// Este archivo de rutas aún se encuentra en pendientes

import { Router } from 'express'
import validateParamsAlumno from '../middlewares/valid.params.Alumno.js'
import { createAsignatura, getAsignaturaById, getAllAsignaturas, updateAsignatura, deleteAsignatura, createNewAlumno, createNewDocente } from '../src/controllers/AdminController.js'
import validateParamsDocente from '../middlewares/valid.params.Docente.js'

const router = Router()

// Rutas Alumnos
router.post('/admin/alumno', validateParamsAlumno, createNewAlumno)

// Rutas Docentes
router.post('/admin/docente', validateParamsDocente, createNewDocente)

// Rutas Asignaturas
router.post('/asignaturas', createAsignatura)
router.get('/asignaturas/:asignatura_id', getAsignaturaById)
router.get('/asignaturas', getAllAsignaturas)
router.put('/asignaturas/:asignatura_id', updateAsignatura)
router.delete('/asignaturas/:asignatura_id', deleteAsignatura)

export default router
