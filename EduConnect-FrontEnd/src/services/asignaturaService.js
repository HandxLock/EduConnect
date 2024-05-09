/* eslint-disable camelcase */
import axios from './axios'

// crear asignatura
const crearAsignatura = async (nombre, descripcion, colegio_id) => {
  try {
    const asignatura = { nombre, descripcion, colegio_id }
    return await axios.post('/asignatura', asignatura)
  } catch (error) {
    console.log(error)
  }
}

// modificar asignatura
const modificarAsignatura = async (nombre, descripcion, colegio_id) => {
  try {
    const asignatura = { nombre, descripcion, colegio_id }
    return await axios.put('/asignatura/:asignatura_id', asignatura)
  } catch (error) {
    console.log(error)
  }
}

// obtener asignatura
const obtenerAsignatura = async () => {
  try {
    const res = await axios.get('/asignatura')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const obtenerAsignaturaId = async () => {
  try {
    const res = await axios.get('/asignatura/:asignatura_id')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
// eliminar asignatura
const eliminarAsignatura = async () => {
  try {
    const res = await axios.delete('/asignatura/:asignatura_id')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

const obtenerAsignaturaPorColegioId = async (colegio_id) => {
  try {
    const res = await axios.get(`/asignatura/colegio/${colegio_id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export { crearAsignatura, modificarAsignatura, obtenerAsignatura, obtenerAsignaturaId, eliminarAsignatura, obtenerAsignaturaPorColegioId }
