import { createEvaluacionModel, getEvaluacionesByAlumnoIdModel, updateEvaluacionModel, deleteEvaluacionModel } from '../models/evaluacionesmodel.js'
import sendErrorResponse from '../../utils/utils.js'

const createEvaluation = async (req, res) => {
  const { idAlumno } = req.params
  const { title, score } = req.body.evaluation

  try {
    const newEvaluation = await createEvaluacionModel({
      title,
      score,
      studentId: idAlumno
    })

    res.status(201).json(newEvaluation)
  } catch (error) {
    console.error('Error al crear la evaluación:', error)
    res.status(500).json({ error: error.message })
  }
}

const getEvaluationById = async (req, res) => {
  const { idEvaluacion } = req.params

  try {
    const evaluation = await getEvaluacionesByAlumnoIdModel(idEvaluacion)

    if (!evaluation) {
      return await sendErrorResponse(res, 'eval_01')
    }

    res.json(evaluation)
  } catch (error) {
    console.error('Error al obtener la evaluación por ID:', error)
    res.status(500).json({ error: error.message })
  }
}

const updateEvaluation = async (req, res) => {
  const { idEvaluacion } = req.params
  const { title, score } = req.body.evaluation

  try {
    const updatedEvaluation = await updateEvaluacionModel(
      idEvaluacion,
      { title, score },
      { new: true }
    )

    if (!updatedEvaluation) {
      return await sendErrorResponse(res, 'eval_01')
    }

    res.json(updatedEvaluation)
  } catch (error) {
    console.error('Error al actualizar la evaluación:', error)
    res.status(500).json({ error: error.message })
  }
}

const deleteEvaluation = async (req, res) => {
  const { idEvaluacion } = req.params

  try {
    const deletedEvaluation = await deleteEvaluacionModel(idEvaluacion)

    if (!deletedEvaluation) {
      return await sendErrorResponse(res, 'eval_01')
    }

    res.json({ message: 'Evaluación eliminada correctamente' })
  } catch (error) {
    console.error('Error al eliminar la evaluación:', error)
    res.status(500).json({ error: error.message })
  }
}

export { createEvaluation, getEvaluationById, updateEvaluation, deleteEvaluation }
