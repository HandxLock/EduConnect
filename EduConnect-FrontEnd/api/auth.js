/* eslint-disable camelcase */
import axios from './axios'

const loginUser = (email, password) => {
  const user = { email, password }
  return axios.post('/login', user)
}
const verificarTokenRequest = () => axios.get('/verify')

const getColegios = async () => {
  try {
    const res = await axios.get('/superadmin')
    return res.data
  } catch (error) {
    throw new Error(error.response.data.message || 'Error fetching colegios')
  }
}

const agregarAdmin = async (rut, nombre, apellido1, apellido2, email, clave, direccion, telefono) => {
  try {
    const admin = { rut, nombre, apellido1, apellido2, email, clave, direccion, telefono }
    return await axios.post('/superadmin/admin', admin)
  } catch (error) {
    console.log(error)
  }
}

const agregarColegio = async (nombre, descripcion, rut, telefono, email) => {
  try {
    const colegio = { nombre, descripcion, rut, telefono, email }
    return await axios.post('/superadmin/colegio', colegio)
  } catch (error) {
    console.log(error)
  }
}

const getAdmins = async () => {
  try {
    const res = await axios.get('/superadmin/admins')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const asignarColegio = async (usuario_id, colegio_id) => {
  try {
    const asignacion = { usuario_id, colegio_id }
    return await axios.post('/superadmin/asignarcolegio/', asignacion)
  } catch (error) {
    console.log('tengo un error aqui')
  }
}

export { loginUser, verificarTokenRequest, getColegios, agregarAdmin, agregarColegio, getAdmins, asignarColegio }
