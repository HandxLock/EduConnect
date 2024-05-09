import { Router } from 'express'
import { createNewAlumno, getAlumnosController, updateAlumnoController, deleteAlumnoController } from '../src/controllers/AdminController.js'
import validateParamsAlumno from '../middlewares/valid.params.Alumno.js'
import obtenerNombrePorCursoIDController from '../src/controllers/AlumnoController.js'

const router = Router()

router.post('/admin/alumno', validateParamsAlumno, createNewAlumno)
router.get('/admin/alumnos', getAlumnosController)
router.put('/admin/alumnos/:alumno_id', validateParamsAlumno, updateAlumnoController)
router.delete('/admin/alumnos/:alumno_id', deleteAlumnoController)
router.get('/admin/alumno/:curso_id', obtenerNombrePorCursoIDController)

export default router
