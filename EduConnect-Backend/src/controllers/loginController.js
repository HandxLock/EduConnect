/* eslint-disable camelcase */
import { userByEmailModel } from '../models/UsuarioModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sendErrorResponse from '../../utils/utils.js'
import { idColegioAsignaturaModel } from '../models/asignaturasModel.js'

const loginUser = async (req, res) => {
  console.log(req.body)
  const user = req.body
  // para hacer pruebas de login favor usar las siguientes credenciales: { email: 'ens@educonnect.cl', clave: 'e1234' }
  // frente a dudas revisar archivo de seteo de base de datos
  // console.log('info ingresada: ', user)
  try {
    const findUser = await userByEmailModel(user.email)
    console.log('info retornada: ', findUser)
    if (!findUser) {
      return await sendErrorResponse(res, 'log_01')
    }
    const isPassValid = bcrypt.compareSync(
      user.password,
      findUser.clave
    )
    if (!isPassValid) {
      return await sendErrorResponse(res, 'log_02')
    }

    // eslint-disable-next-line camelcase
    const { usuario_id, email, nombre, apellido1, apellido2, perfil_id } = findUser
    const token = await createToken(usuario_id, nombre, email, perfil_id)
    res.cookie('token', token)
    res.status(200).json({
      usuario_id,
      email,
      nombre,
      apellido1,
      apellido2,
      perfil_id

    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const logout = async (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

// funcion para crear el token
// eslint-disable-next-line camelcase
const createToken = async (usuario_id, nombre, email, perfil_id) => {
  // eslint-disable-next-line camelcase
  const token = jwt.sign({ usuario_id, nombre, email, perfil_id }, process.env.JWT_SECRET, {
    expiresIn: '60m'
  })
  return token
}

const verifyToken = async (req, res) => {
  const { token } = req.cookies
  console.log(req.cookie)
  if (!token) return res.status(401).json({ message: 'No Autorizado' })
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: 'No Autorizado' })
    const usuarioEncontrado = await userByEmailModel(user.email)
    const colegioid = await idColegioAsignaturaModel(usuarioEncontrado.usuario_id)

    if (!usuarioEncontrado) return res.status(401).json({ message: 'No Autorizado' })

    return res.json({
      id: usuarioEncontrado.usuario_id,
      nombre: usuarioEncontrado.nombre,
      email: usuarioEncontrado.email,
      perfil: usuarioEncontrado.perfil_id,
      colegio: colegioid.colegio_id
    })
  })
}
export { loginUser, logout, verifyToken }
