const validateParamsAlumno = (req, res, next) => {
  const { alumno, apoderado } = req.body
  if (!alumno.user.rut || !alumno.user.nombre || !alumno.user.apellido1 || !alumno.user.apellido2 || !alumno.user.email || !alumno.user.clave || !alumno.user.direccion || !alumno.user.telefono || !alumno.user.perfilId === 4 || !alumno.colegioID) {
    return res.status(400).json({ error: 'debe ingresar todos los campos para registrar un alumno' })
  }
  if (!apoderado.user.rut || !apoderado.user.nombre || !apoderado.user.apellido1 || !apoderado.user.apellido2 || !apoderado.user.email || !apoderado.user.clave || !apoderado.user.direccion || !apoderado.user.telefono || !apoderado.user.perfilId || !alumno.user.perfilId === 5 || !apoderado.colegioID) {
    return res.status(400).json({ error: 'debe ingresar todos los campos para registrar un apoderado' })
  }
  next()
}

export default validateParamsAlumno
