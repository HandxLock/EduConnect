const validateParamsDocente = (req, res, next) => {
  const { docente } = req.body
  if (!docente.user.rut || !docente.user.nombre || !docente.user.apellido1 || !docente.user.apellido2 || !docente.user.email || !docente.user.clave || !docente.user.direccion || !docente.user.telefono || !docente.user.perfilId === 3 || !docente.asignaturaID || !docente.colegioID) {
    return res.status(400).json({ error: 'debe ingresar todos los campos para registrar un docente' })
  }
  next()
}

export default validateParamsDocente
