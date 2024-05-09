/* eslint-disable camelcase */
import sendErrorResponse from '../utils/utils.js'

const validateParamsAsignatura = (req, res, next) => {
  const { nombre, descripcion, colegio_id } = req.body
  if (!nombre || !descripcion || !colegio_id) {
    sendErrorResponse(res, 'error.incon')
    return
  }
  next()
}

export default validateParamsAsignatura
