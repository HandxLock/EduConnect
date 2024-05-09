import express from 'express'
import { createEvaluation, getEvaluationById, updateEvaluation, deleteEvaluation, getEvaluationByusuarioId } from '../src/controllers/evaluacionController.js'
import validateParamsEvaluation from '../middlewares/valid.params.Evaluaciones.js'
import { validarPermisoLecturaEvaluaciones } from '../middlewares/validarPermisosLectura.js'
import { validarPermisoCRUDEvaluaciones } from '../middlewares/validarPermisosCRUD.js'

const router = express.Router()

router.post('/alumnos/:idAlumno/evaluaciones', validateParamsEvaluation, validarPermisoCRUDEvaluaciones, createEvaluation)

router.get('/alumnos/:idAlumno/evaluaciones/:idEvaluacion', validarPermisoLecturaEvaluaciones, getEvaluationById)

router.put('/alumnos/:idAlumno/evaluaciones/:idEvaluacion', validateParamsEvaluation, validarPermisoCRUDEvaluaciones, updateEvaluation)

router.delete('/alumnos/:idAlumno/evaluaciones/:idEvaluacion', validarPermisoCRUDEvaluaciones, deleteEvaluation)

router.get('/alumnos/:usuario_id', validarPermisoLecturaEvaluaciones, getEvaluationByusuarioId)

export default router
