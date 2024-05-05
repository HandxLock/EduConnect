/* eslint-disable camelcase */
import axios from './axios'

// crear curso
const crearCurso = async (nombre, descripcion, colegio_id) => {
  try {
    const curso = { nombre, descripcion, colegio_id }
    return await axios.post('/curso', curso)
  } catch (error) {
    console.log(error)
  }
}
// modificar curso
const modificarCurso = async (curso_id, nombre, descripcion, colegio_id) => {
  try {
    const curso = { curso_id, nombre, descripcion, colegio_id }
    return await axios.put('/curso/:curso_id', curso)
  } catch (error) {
    console.log(error)
  }
}
// obtener curso
const obtenerCurso = async () => {
  try {
    const res = await axios.get('/curso')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const obtenerCursoId = async () => {
  try {
    const res = await axios.get('/curso/:curso_id')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
// eliminar

const eliminarCurso = async () => {
  try {
    const res = await axios.delete('/curso/:curso_id')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export { crearCurso, modificarCurso, obtenerCurso, obtenerCursoId, eliminarCurso }
