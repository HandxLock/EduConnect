/* eslint-disable camelcase */
import axios from './axios'

// crear observacion
const crearObservacion = async (titulo, descripcion, docente_id, alumno_id) => {
  try {
    const observacion = { titulo, descripcion, docente_id, alumno_id }
    return await axios.post('/observacion', observacion)
  } catch (error) {
    console.log(error)
  }
}

// modificar observacion
const modificarObservacion = async (titulo, descripcion, docente_id, alumno_id) => {
  try {
    const observacion = { titulo, descripcion, docente_id, alumno_id }
    return await axios.put('/observacion/:id', observacion)
  } catch (error) {
    console.log(error)
  }
}

// obtener observacion
const obtenerObservacion = async () => {
  try {
    const res = await axios.get('/observacion')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// eliminar observacion
const eliminarObservacion = async () => {
  try {
    const res = await axios.delete('/observacion/:id')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const obtenerObservacionesUsuarioId = async (usuario_id) => {
  try {
    const res = await axios.get(`/admin/alumnos/observaciones/${usuario_id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export { crearObservacion, modificarObservacion, obtenerObservacion, eliminarObservacion, obtenerObservacionesUsuarioId }
