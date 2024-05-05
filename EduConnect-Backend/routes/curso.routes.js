// Este archivo de rutas aún se encuentra en pendientes

import { Router } from 'express'
// import validateParamsAlumno from '../middlewares/valid.params.Alumno.js'
import { createCurso, getCursoById, getCurso, updateCurso, deleteCurso /* , createNewAlumno, createNewDocente */ } from '../src/controllers/AdminController.js'
// import validateParamsDocente from '../middlewares/valid.params.Docente.js'

const router = Router()

// Rutas Alumnos
// router.post('/admin/alumno', validateParamsAlumno, createNewAlumno)

// Rutas Docentes
// router.post('/admin/docente', validateParamsDocente, createNewDocente)

// Rutas Cursos
router.post('/curso', createCurso)
router.get('/curso/:curso_id', getCursoById)
router.get('/curso', getCurso)
router.put('/curso/:curso_id', updateCurso)
router.delete('/curso/:curso_id', deleteCurso)

export default router
