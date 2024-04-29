const validateParamsUser = (req, res, next) => {
  const { user } = req.body
  if (!user.rut || !user.nombre || !user.apellido1 || !user.apellido2 || !user.email || !user.clave || !user.direccion || !user.telefono || !user.perfilId) {
    return res.status(400).json({ error: 'debe ingresar todos los campos para registrar una persona' })
  }
  next()
}

export default validateParamsUser
