import sendErrorResponse from '../utils/utils.js'

const validarObservacion = (req, res, next) => {
  const { titulo, observacion, docenteId, alumnoId, fechaObservacion } = req.body
  if (!titulo || !observacion || !docenteId || !alumnoId || !fechaObservacion) {
    sendErrorResponse(res, 'error.incon')
    return
  }
  next()
}

export default validarObservacion
