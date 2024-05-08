/* eslint-disable camelcase */
const validateParamsColegio = (req, res, next) => {
  const { nombre, descripcion, rut, direccion, telefono, email } = req.body
  if (!nombre || !descripcion || !rut || !direccion || !telefono || !email) {
    return res.status(400).json({ error: 'Se requieren todos los campos para crear un colegio' })
  }

  next()
}

const validateParamsAdmin = (req, res, next) => {
  const { rut, nombre, apellido1, apellido2, email, clave, direccion, telefono } = req.body
  if (!nombre || !apellido1 || !apellido2 || !rut || !direccion || !telefono || !email || !clave) {
    return res.status(400).json({ error: 'Se requieren todos los campos para crear un Admin' })
  }

  next()
}

const validateParamsAdminAsignarColegio = (req, res, next) => {
  const { usuario_id, colegio_id } = req.body
  if (!usuario_id || !colegio_id) {
    return res.status(400).json({ error: 'Se requiere selecionar el Admin y el Colegio para vincularlos' })
  }

  next()
}

export { validateParamsColegio, validateParamsAdmin, validateParamsAdminAsignarColegio }
