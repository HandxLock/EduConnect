import { userByEmailModel } from '../models/Usuariomodel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sendErrorResponse from '../../utils/utils.js'

const loginUser = async (req, res) => {
  const { user } = req.body
  // para hacer pruebas de login favor usar las siguientes credenciales: { email: 'ens@educonnect.cl', clave: 'e1234' }
  // frente a dudas revisar archivo de seteo de base de datos
  // console.log('info ingresada: ', user)
  try {
    const findUser = await userByEmailModel(user.email)
    // console.log('info retornada: ', findUser)
    if (!findUser) {
      return await sendErrorResponse(res, 'log_01')
    }
    const isPassValid = bcrypt.compareSync(
      user.clave,
      findUser.clave
    )
    if (!isPassValid) {
      return await sendErrorResponse(res, 'log_02')
    }

    const { email, nombre, apellido1, apellido2 } = findUser
    const token = await createToken(email)
    res.status(200).json({
      message: `Bienvenid@ ${nombre} ${apellido1} ${apellido2}, has iniciado sesión satisfactoriamente.`,
      code: 200,
      token
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// funcion para crear el token
const createToken = async (email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: '60s'
  })
  return token
}

export default loginUser
