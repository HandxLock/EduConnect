import sendErrorResponse from '../utils/utils.js'

export const validateParamsUser = (req, res, next) => {
  const { user } = req.body
  if (!user.rut || !user.nombre || !user.apellido1 || !user.apellido2 || !user.email || !user.clave || !user.direccion || !user.telefono || !user.perfilId) {
    sendErrorResponse(res, 'error.incon')
    return
  }
  next()
}

export default validateParamsUser
