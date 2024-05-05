import axios from './axios'

const agregarAdmin = async (rut, nombre, apellido1, apellido2, email, clave, direccion, telefono) => {
  try {
    const admin = { rut, nombre, apellido1, apellido2, email, clave, direccion, telefono }
    return await axios.post('/superadmin/admin', admin)
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

export { agregarAdmin, getAdmins }
