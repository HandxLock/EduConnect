import { Router } from 'express'
import { createNewDocente, getDocentesController, updateDocenteController, deleteDocenteController, getDocenteByIDController } from '../src/controllers/AdminController.js'
import validateParamsDocente from '../middlewares/valid.params.Docente.js'
import { validarPermisoCRUDDocentes } from '../middlewares/validarPermisosCRUD.js'

const router = Router()

// Rutas Docentes
router.post('/admin/docente', validateParamsDocente, validarPermisoCRUDDocentes, createNewDocente)
router.get('/admin/docentes/:docente_id', getDocenteByIDController)
router.get('/admin/docentes', getDocentesController)
router.put('/admin/docentes/:docente_id', validateParamsDocente, validarPermisoCRUDDocentes, updateDocenteController)
router.delete('/admin/docentes/:docente_id', validarPermisoCRUDDocentes, deleteDocenteController)

export default router
