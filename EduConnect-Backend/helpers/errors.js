const ERRORS = [
  { code: 'log_01', status: 400, message: 'El email no existe, asegurese de que el email está bien escrito' },
  { code: 'log_02', status: 400, message: 'La contraseña es invalida, tenga cuidado con las máyusculas' },
  { code: 'log_03', status: 401, message: 'No se ha encontrado un token, intente loggear de nuevo' },
  { code: 'log_04', status: 401, message: 'El token disponible no es válido, vuelva a intentar loggear luego de un minuto' }
]

export default ERRORS
