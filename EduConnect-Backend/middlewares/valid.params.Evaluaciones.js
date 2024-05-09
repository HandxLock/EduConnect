import sendErrorResponse from '../utils/utils.js'

export const validateParamsEvaluacion = (req, res, next) => {
  const { title, score } = req.body.evaluation
  if (!title || !score) {
    sendErrorResponse(res, 'error.incon')
    return
  }
  next()
}

export default validateParamsEvaluacion
