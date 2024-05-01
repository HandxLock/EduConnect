import { createUsuarioModel, userByEmailModel } from '../models/UsuarioModel.js'

const createNewUser = async (req, res) => {
  try {
    const { user } = req.body
    console.log('info ingresada:', user)
    const newUser = await createUsuarioModel(user)
    console.log('info retornada:', newUser)
    return res.status(201).json(newUser)
  } catch (error) {
    console.error('Error al crear un registro nuevo de persona:', error)
    return res.status(400).json({ message: 'Error interno del servidor' })
  }
}

const getUserByEmail = async (req, res) => {
  try {
    const email = req.params
    // console.log('info ingresada :', email)
    const user = await userByEmailModel(email.email)
    // console.log('info retornada: ', user)
    return res.status(200).json(user)
  } catch (error) {
    console.error('Error al buscar el registro de la persona:', error)
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

export { createNewUser, getUserByEmail }
