// Este archivo de rutas aún se encuentra en pendientes

import { Router } from 'express'
import { createNewAlumno } from '../src/controllers/AdminController.js'
import validateParamsAlumno from '../middlewares/valid.params.Alumno.js'

const router = Router()

router.post('/admin/alumno', validateParamsAlumno, createNewAlumno)

export default router
