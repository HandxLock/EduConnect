import axios from './axios'
const getColegios = async () => {
  try {
    const res = await axios.get('/superadmin')
    return res.data
  } catch (error) {
    throw new Error(error.response.data.message || 'Error fetching colegios')
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

// eslint-disable-next-line camelcase
const asignarColegio = async (usuario_id, colegio_id) => {
  try {
    // eslint-disable-next-line camelcase
    const asignacion = { usuario_id, colegio_id }
    return await axios.post('/superadmin/asignarcolegio/', asignacion)
  } catch (error) {
    console.log('tengo un error aqui')
  }
}

export { getColegios, agregarColegio, asignarColegio }
