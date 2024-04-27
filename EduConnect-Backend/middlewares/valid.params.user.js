const validateParamsUser = (req, res, next) => {
  const { person } = req.body
  if (!person.rut || !person.nombre || !person.apellido1 || !person.apellido2 || !person.email || !person.clave || !person.direccion || !person.telefono || !person.perfil_id) {
    return res.status(400).json({ error: 'debe ingresar todos los campos para registrar una persona' })
  }
  next()
}

export default validateParamsUser
