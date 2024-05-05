// Este archivo de rutas aún se encuentra en pendientes

import { Router } from 'express'
import validateParamsAlumno from '../middlewares/valid.params.Alumno.js'
import { createAsignatura, getAsignaturaById, getAllAsignaturas, updateAsignatura, deleteAsignatura, createCurso, getCursoById, getCurso, updateCurso, deleteCurso, createNewAlumno, createNewDocente, getDocentesController, deleteDocenteController, updateDocenteController, getAlumnosController, updateAlumnoController, deleteAlumnoController } from '../src/controllers/AdminController.js'
import validateParamsDocente from '../middlewares/valid.params.Docente.js'

const router = Router()

// Rutas Alumnos
router.post('/admin/alumno', validateParamsAlumno, createNewAlumno)
router.get('/admin/alumnos', getAlumnosController)
router.put('/admin/alumnos/:alumno_id', updateAlumnoController)
router.delete('/admin/alumnos/:alumno_id', deleteAlumnoController)


// Rutas Docentes
router.post('/admin/docente', validateParamsDocente, createNewDocente)
// router.get('/admin/docentes/:docente_id')
router.get('/admin/docentes', getDocentesController)
router.put('/admin/docentes/:docente_id', updateDocenteController)
router.delete('/admin/docentes/:docente_id', deleteDocenteController)

// Rutas Asignaturas
router.post('/admin/asignaturas', createAsignatura)
router.get('/admin/asignaturas/:asignatura_id', getAsignaturaById)
router.get('/admin/asignaturas', getAllAsignaturas)
router.put('/admin/asignaturas/:asignatura_id', updateAsignatura)
router.delete('/admin/asignaturas/:asignatura_id', deleteAsignatura)

// Rutas Cursos
router.post('/admin/cursos', createCurso)
router.get('/admin/cursos/:curso_id', getCursoById)
router.get('/admin/cursos', getCurso)
router.put('/admin/cursos/:curso_id', updateCurso)
router.delete('/admin/cursos/:curso_id', deleteCurso)

export default router
