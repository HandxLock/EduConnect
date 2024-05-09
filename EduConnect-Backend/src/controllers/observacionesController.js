import { crearObservacionModel, modificarObservacionModel, obtenerTodaObservacionModel, eliminarObservacionModel, obtenerTodaObservacionUserId } from '../models/observacionesmodel.js'

// crear observacion
const crearObservacion = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { titulo, descripcion, docente_id, alumno_id } = req.body
    console.log(titulo, descripcion, docente_id, alumno_id)
    const nuevaObservacion = await crearObservacionModel(titulo, descripcion, docente_id, alumno_id)
    res.status(201).json({ creado: nuevaObservacion })
  } catch (error) {
    res.status(500).json(error.message)
    console.log('Error al procesar la solicitud:', error)
  }
}

// modificar observacion
const modificarObservacion = async (req, res) => {
  try {
    const { id } = req.params
    const observacion = await modificarObservacionModel(id, req.body)
    res.status(200).json({ observacion })
  } catch (error) {
    res.status(500).json(error.message)
    console.log('Error al procesar la solicitud:', error)
  }
}

// obtener observacion
const obtenerObservacion = async (req, res) => {
  try {
    const observacion = await obtenerTodaObservacionModel()
    res.status(200).json({ observacion })
  } catch (error) {
    res.status(500).json(error.message)
    console.log('Error al procesar la solicitud:', error)
  }
}

// eliminar observacion
const eliminarObservacion = async (req, res) => {
  try {
    const { id } = req.params
    const observacion = await eliminarObservacionModel(id)
    if (observacion === 0) {
      return res.status(404).json({ error: `post with id ${id} not found` })
    }
    res.status(200).json({ message: `post with id ${id} deleted` })
  } catch (error) {
    res.status(500).json(error.message)
    console.log('Error al procesar la solicitud:', error)
  }
}

const obtenerObservacionUsuarioId = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { usuario_id } = req.params
    const observacionId = await obtenerTodaObservacionUserId(usuario_id)
    res.status(200).json(observacionId)
  } catch (error) {
    res.status(500).json(error.message)
    console.log('Error al procesar la solicitud:', error)
  }
}

export { crearObservacion, modificarObservacion, obtenerObservacion, eliminarObservacion, obtenerObservacionUsuarioId }
