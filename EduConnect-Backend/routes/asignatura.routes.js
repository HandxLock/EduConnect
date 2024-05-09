import { Router } from 'express'
import { createAsignatura, getAsignaturaById, getAllAsignaturas, updateAsignatura, deleteAsignatura } from '../src/controllers/AdminController.js'
import validateParamsAsignatura from '../middlewares/valid.params.asignaturas.js'
import { validarPermisoLecturaAsignatura } from '../middlewares/validarPermisosLectura.js'
import { validarPermisoCRUDAsignatura } from '../middlewares/validarPermisosCRUD.js'

const router = Router()

// Rutas Asignaturas
router.post('/asignatura', validateParamsAsignatura, validarPermisoCRUDAsignatura, createAsignatura)
router.get('/asignatura/:asignatura_id', validarPermisoLecturaAsignatura, getAsignaturaById)
router.get('/asignatura', validarPermisoLecturaAsignatura, getAllAsignaturas)
router.put('/asignatura/:asignatura_id', validateParamsAsignatura, validarPermisoCRUDAsignatura, updateAsignatura)
router.delete('/asignatura/:asignatura_id', validarPermisoCRUDAsignatura, deleteAsignatura)

export default router
