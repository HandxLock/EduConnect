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

const createAlumno = async (usuarioID, colegioID, apoderadoID, cursoID) => {
  try {
    const alumno = { usuarioID, colegioID, apoderadoID, cursoID }
    return await axios.post('/admin/alumno', alumno)
  } catch (error) {
    console.log(error)
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
export { getAlumnos, deleteAlumno, createAlumno /* getUsuarioByAlumno */ }
