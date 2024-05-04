import jwt from 'jsonwebtoken'
import 'dotenv/config'

const validarToken = async (req, res, next) => {
  const { token } = req.cookies
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    console.log(user)
  })
  next()
}

export default validarToken
