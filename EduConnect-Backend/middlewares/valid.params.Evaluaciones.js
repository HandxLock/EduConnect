const validateParamsEvaluacion = (req, res, next) => {
  const { title, score } = req.body.evaluation
  if (!title || !score) {
    return res.status(400).json({ error: 'Se requieren título y calificación para crear una evaluación' })
  }

  next()
}

export default validateParamsEvaluacion
