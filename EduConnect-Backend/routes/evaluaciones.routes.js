import express from 'express'
import { createEvaluation, getEvaluationById, updateEvaluation, deleteEvaluation } from '../src/controllers/evaluacionController'
import validateParamsEvaluation from '../middlewares/validateParamsEvaluation.js'

const router = express.Router()

router.post('/alumnos/:idAlumno/evaluaciones', validateParamsEvaluation, createEvaluation)

router.get('/alumnos/:idAlumno/evaluaciones/:idEvaluacion', getEvaluationById)

router.put('/alumnos/:idAlumno/evaluaciones/:idEvaluacion', validateParamsEvaluation, updateEvaluation)

router.delete('/alumnos/:idAlumno/evaluaciones/:idEvaluacion', deleteEvaluation)

export default router
