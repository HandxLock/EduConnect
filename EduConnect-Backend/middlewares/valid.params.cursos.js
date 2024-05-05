/* eslint-disable camelcase */
export const validateParamsCurso = (req, res, next) => {
  const { nombre, descripcion, colegio_id } = req.body

  if (!nombre || !descripcion || !colegio_id) {
    return res.status(400).json({ message: 'Todos los campos son requeridos para crear o actualizar un curso' })
  }

  next()
}
