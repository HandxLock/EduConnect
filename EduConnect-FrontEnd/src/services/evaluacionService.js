/* eslint-disable camelcase */
import axios from './axios'

// crear evaluacion
const crearEvaluacion = async (nombre, calificacion, fechaEvaluacion) => {
  try {
    const evaluacion = { nombre, calificacion, fechaEvaluacion }
    return await axios.post('/alumnos/:idAlumno/evaluaciones', evaluacion)
  } catch (error) {
    console.log(error)
  }
}

// modificar evaluacion
const modificarEvaluacion = async (nombre, calificacion, fechaEvaluacion) => {
  try {
    const evaluacion = { nombre, calificacion, fechaEvaluacion }
    return await axios.put('/alumnos/:idAlumno/evaluaciones/:idEvaluacion', evaluacion)
  } catch (error) {
    console.log(error)
  }
}

// obtener evaluacion
const obtenerEvaluacion = async () => {
  try {
    const res = await axios.get('/alumnos/:idAlumno/evaluaciones/:idEvaluacion')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// eliminar evaluacion
const eliminarEvaluacion = async () => {
  try {
    const res = await axios.delete('/alumnos/:idAlumno/evaluaciones/:idEvaluacion')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
const obtenerEvaluacionUsuarioId = async (usuario_id) => {
  try {
    const res = await axios.get(`/alumnos/${usuario_id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export { crearEvaluacion, modificarEvaluacion, obtenerEvaluacion, eliminarEvaluacion, obtenerEvaluacionUsuarioId }
