import { Router } from 'express'
import { createNewDocente, getDocentesController, updateDocenteController, deleteDocenteController, getDocenteByIDController, getDocentePorColegioIdController, createAsignacionCursoController } from '../src/controllers/AdminController.js'
import validateParamsDocente from '../middlewares/valid.params.Docente.js'

const router = Router()

// Rutas Docentes
router.post('/admin/docente', validateParamsDocente, createNewDocente)
router.get('/admin/docentes/:docente_id', getDocenteByIDController)
router.get('/admin/docentes', getDocentesController)
router.put('/admin/docentes/:docente_id', updateDocenteController)
router.delete('/admin/docentes/:docente_id', deleteDocenteController)
router.get('/admin/docente/colegio/:colegio_id', getDocentePorColegioIdController)
router.post('/admin/docente/asignacioncurso', createAsignacionCursoController)

export default router
