// Este archivo de rutas aún se encuentra en pendientes

import { Router } from 'express'
// import validateParamsAlumno from '../middlewares/valid.params.Alumno.js'
import { createCurso, getCursoById, getCurso, updateCurso, deleteCurso /* , createNewAlumno, createNewDocente */ } from '../src/controllers/AdminController.js'
// import validateParamsDocente from '../middlewares/valid.params.Docente.js'
import { validateParamsCurso } from '../middlewares/valid.params.cursos.js'
import { validarPermisoLecturaCurso } from '../middlewares/validarPermisosLectura.js'
import { validarPermisoCRUDCurso } from '../middlewares/validarPermisosCRUD.js'

const router = Router()

// Rutas Alumnos
// router.post('/admin/alumno', validateParamsAlumno, createNewAlumno)

// Rutas Docentes
// router.post('/admin/docente', validateParamsDocente, createNewDocente)

// Rutas Cursos
router.post('/curso', validateParamsCurso, validarPermisoCRUDCurso, createCurso)
router.get('/curso/:curso_id', validarPermisoLecturaCurso, getCursoById)
router.get('/curso', validarPermisoLecturaCurso, getCurso)
router.put('/curso/:curso_id', validateParamsCurso, validarPermisoCRUDCurso, updateCurso)
router.delete('/curso/:curso_id', validarPermisoCRUDCurso, deleteCurso)

export default router
