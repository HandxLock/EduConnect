const validarObservacion = (req, res, next) => {
  const { titulo, observacion, docenteId, alumnoId, fechaObservacion } = req.body
  if (!titulo || !observacion || !docenteId || !alumnoId || fechaObservacion) {
    return res.status(400).json({ error: 'debe ingresar todos los campos para registrar una persona' })
  }
  next()
}

export default validarObservacion
