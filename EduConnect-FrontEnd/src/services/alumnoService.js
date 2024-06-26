/* eslint-disable camelcase */
import axios from './axios'

const getAlumnos = async () => {
  try {
    const res = await axios.get('/admin/alumnos')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

/* const getUsuarioByAlumno = async () => {
  try {
    const res = await axios.get('/admin/alumnos')
    return res.data
  } catch (error) {
    console.log(error)
  }
} */

const createAlumno = async (alumno, apoderado) => {
  try {
    const data = { alumno, apoderado }
    return await axios.post('/admin/alumno', data)
  } catch (error) {
    console.log('mensaje error' + error)
  }
}
const deleteAlumno = async () => {
  try {
    const res = await axios.delete('/admin/alumnos/:alumno_id')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const obtenerNombrePorCursoID = async (curso_id) => {
  try {
    const res = await axios.get(`/admin/alumno/${curso_id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export { getAlumnos, deleteAlumno, createAlumno, obtenerNombrePorCursoID /* getUsuarioByAlumno */ }
