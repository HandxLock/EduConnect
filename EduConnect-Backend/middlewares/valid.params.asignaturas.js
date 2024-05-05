/* eslint-disable camelcase */
const validateParamsAsignatura = (req, res, next) => {
  const { nombre, descripcion, colegio_id } = req.body
  if (!nombre || !descripcion || !colegio_id) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' })
  }
  next()
}

export default validateParamsAsignatura
