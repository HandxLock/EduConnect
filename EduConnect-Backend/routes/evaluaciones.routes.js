import express from 'express'
import { createEvaluation, getEvaluationById, updateEvaluation, deleteEvaluation, getEvaluationByusuarioId } from '../src/controllers/evaluacionController.js'
import validateParamsEvaluation from '../middlewares/valid.params.Evaluaciones.js'

const router = express.Router()

router.post('/alumnos/:idAlumno/evaluaciones', validateParamsEvaluation, createEvaluation)

router.get('/alumnos/:idAlumno/evaluaciones/:idEvaluacion', getEvaluationById)

router.put('/alumnos/:idAlumno/evaluaciones/:idEvaluacion', validateParamsEvaluation, updateEvaluation)

router.delete('/alumnos/:idAlumno/evaluaciones/:idEvaluacion', deleteEvaluation)

router.get('/alumnos/:usuario_id', getEvaluationByusuarioId)

export default router
