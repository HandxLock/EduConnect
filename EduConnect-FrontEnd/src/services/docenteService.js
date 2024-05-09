/* eslint-disable camelcase */
import axios from './axios'

const getDocentes = async () => {
  try {
    const res = await axios.get('/admin/docentes')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const createDocente = async (usuarioID, colegioID, asignaturaID) => {
  try {
    const docente = { usuarioID, colegioID, asignaturaID }
    return await axios.post('/admin/docente', docente)
  } catch (error) {
    console.log(error)
  }
}

const deleteDocente = async () => {
  try {
    const res = await axios.delete('/admin/docentes/:docente_id')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const getDocenteIdPorColegioId = async (colegio_id) => {
  try {
    const res = await axios.get(`/admin/docente/colegio/${colegio_id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const asignacionDocenteCurso = async (docente_id, curso_id) => {
  try {
    const docenteCurso = { docente_id, curso_id }
    return await axios.post('/admin/docente/asignacioncurso/', docenteCurso)
  } catch (error) {
    console.log(error)
  }
}
export { getDocentes, createDocente, deleteDocente, getDocenteIdPorColegioId, asignacionDocenteCurso }
