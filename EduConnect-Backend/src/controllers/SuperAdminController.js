/* eslint-disable camelcase */
import { actualizarColegio, crearColegio, eliminarColegio, obtenerColegios } from '../models/superAdminModel.js'

const crearColegioController = async (req, res) => {
  try {
    const { nombre, descripcion, rut, direccion, telefono, email } = req.body
    const nuevoColegio = await crearColegio(nombre, descripcion, rut, direccion, telefono, email)
    res.json(nuevoColegio)
  } catch (error) {
    console.error('Error al crear el colegio:', error.message)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

const obtenerColegioController = async (req, res) => {
  try {
    const colegios = await obtenerColegios()
    res.json(colegios)
  } catch (error) {
    console.error('Error al obtener los colegios:', error.message)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}
const actualizarColegioController = async (req, res) => {
  try {
    const { colegio_id } = req.params
    const { nombre, descripcion, rut, direccion, telefono, email } = req.body
    const colegioActualizado = await actualizarColegio(colegio_id, nombre, descripcion, rut, direccion, telefono, email)
    res.json(colegioActualizado)
  } catch (error) {
    console.error('Error al actualizar el colegio:', error.message)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

const eliminarColegioController = async (req, res) => {
  try {
    const { colegio_id } = req.params
    await eliminarColegio(colegio_id)
    res.json({ mensaje: 'Colegio eliminado exitosamente' })
  } catch (error) {
    console.error('Error al eliminar el colegio:', error.message)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

export { crearColegioController, obtenerColegioController, actualizarColegioController, eliminarColegioController }
