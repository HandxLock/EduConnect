const validateParamsDocente = (req, res, next) => {
  const { usuarioID, colegioID, asignaturaID } = req.body
  if (!usuarioID || !usuarioID.user || !usuarioID.user.rut || !usuarioID.user.nombre || !usuarioID.user.apellido1 || !usuarioID.user.apellido2 || !usuarioID.user.email || !usuarioID.user.clave || !usuarioID.user.direccion || !usuarioID.user.telefono || !usuarioID.user.perfilId === 3) {
    return res.status(400).json({ error: 'Faltan campos del usuario en la solicitud' })
  }

  if (!colegioID) {
    return res.status(400).json({ error: 'Falta el campo colegioID en la solicitud' })
  }

  // Comprobación de la existencia de asignaturaID y su campo
  if (!asignaturaID) {
    return res.status(400).json({ error: 'Falta el campo asignaturaID en la solicitud' })
  }

  next()
}

export default validateParamsDocente
