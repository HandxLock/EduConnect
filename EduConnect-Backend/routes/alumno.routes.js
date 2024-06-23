import { Router } from 'express'
import { createNewAlumno, getAlumnosController, updateAlumnoController, deleteAlumnoController } from '../src/controllers/AdminController.js'
import validateParamsAlumno from '../middlewares/valid.params.Alumno.js'
import obtenerNombrePorCursoIDController from '../src/controllers/AlumnoController.js'
import { validarPermisoLecturaAlumno } from '../middlewares/validarPermisosLectura.js'
import { validarPermisoCRUDAlumno } from '../middlewares/validarPermisosCRUD.js'

const router = Router()

router.post('/admin/alumno', validateParamsAlumno, validarPermisoCRUDAlumno, createNewAlumno)
router.get('/admin/alumnos', validarPermisoLecturaAlumno, getAlumnosController)
router.put('/admin/alumnos/:alumno_id', validateParamsAlumno, validarPermisoCRUDAlumno, updateAlumnoController)
router.delete('/admin/alumnos/:alumno_id', validarPermisoCRUDAlumno, deleteAlumnoController)
router.get('/admin/alumno/:curso_id', obtenerNombrePorCursoIDController)

export default router
