const validateParamsLogin = (req, res, next) => {
  console.log(req.body)
  const user = req.body
  console.log(user.email)// Utiliza el operador opcional para manejar un posible valor nulo o indefinido
  console.log(user.password)
  if (!user.email || !user.password) {
    return res.status(400).json({ error: 'Debe ingresar email y contraseña para poder loggear satisfactoriamente' })
  }
  next()
}

export default validateParamsLogin
