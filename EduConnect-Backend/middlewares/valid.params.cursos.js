/* eslint-disable camelcase */
import sendErrorResponse from '../utils/utils.js'

export const validateParamsCurso = (req, res, next) => {
  const { nombre, descripcion, colegio_id } = req.body

  if (!nombre || !descripcion || !colegio_id) {
    sendErrorResponse(res, 'error.incom')
    return
  }

  next()
}
