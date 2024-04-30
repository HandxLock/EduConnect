// Este archivo de rutas aún se encuentra en pendientes

import { Router } from 'express'
import { createNewAlumno } from '../src/controllers/AdminController.js'
import validateParamsAlumno from '../middlewares/valid.params.Alumno.js'
import { createAsignatura, getAsignaturaById, getAllAsignaturas, updateAsignatura, deleteAsignatura } from '../src/controllers/AdminController'

const router = Router()

// Rutas Alumnos
router.post('/admin/alumno', validateParamsAlumno, createNewAlumno)

// Rutas Asignaturas
router.post('/asignaturas', createAsignatura)
router.get('/asignaturas/:asignatura_id', getAsignaturaById)
router.get('/asignaturas', getAllAsignaturas)
router.put('/asignaturas/:asignatura_id', updateAsignatura)
router.delete('/asignaturas/:asignatura_id', deleteAsignatura)

export default router
