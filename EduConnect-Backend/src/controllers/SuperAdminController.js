/* eslint-disable no-undef */
/* eslint-disable camelcase */
import { createUsuarioModel } from '../models/UsuarioModel.js'
import { actualizarAdmin, actualizarColegio, asignarColegio, crearColegio, eliminarAdmin, eliminarColegio, obtenerAdmins, obtenerColegios } from '../models/superAdminModel.js'

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
    res.status(500).json({ error: 'No se Encuentra ID a Actualizar' })
  }
}

const eliminarColegioController = async (req, res) => {
  try {
    const { colegio_id } = req.params
    await eliminarColegio(colegio_id)
    res.json({ mensaje: 'Colegio eliminado exitosamente' })
  } catch (error) {
    console.error('Error al eliminar el colegio:', error.message)
    res.status(500).json({ error: 'No se Encuentr ID para Eliminar' })
  }
}

const crearAdminController = async (req, res) => {
  try {
    const perfilId = 2
    const { rut, nombre, apellido1, apellido2, email, clave, direccion, telefono } = req.body
    const nuevoAdmin = await createUsuarioModel({ rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, perfilId })
    res.json(nuevoAdmin)
  } catch (error) {
    console.error('Error al crear admin:', error.message)
    res.status(500).json({ error: 'No se puede crear admin' })
  }
}

const obtenerAdminsController = async (req, res) => {
  try {
    const admins = await obtenerAdmins()
    res.json(admins)
  } catch (error) {
    console.error('Error al eliminar el colegio:', error.message)
    res.status(500).json({ error: 'No se Muestran Admins' })
  }
}

const actualizarAdminsController = async (req, res) => {
  try {
    const { usuario_id } = req.params
    const { rut, nombre, apellido1, apellido2, email, clave, direccion, telefono } = req.body
    const adminActualizado = await actualizarAdmin(usuario_id, rut, nombre, apellido1, apellido2, email, clave, direccion, telefono)
    res.json(adminActualizado)
  } catch (error) {
    console.log(error)
  }
}

const eliminarAdminController = async (req, res) => {
  try {
    const { usuario_id } = req.params
    await eliminarAdmin(usuario_id)
    res.json({ mensaje: 'Admin eliminado exitosamente' })
  } catch (error) {
    console.error('Error al eliminar el Admin:', error.message)
    res.status(500).json({ error: 'No se Encuentr ID para Eliminar Admin' })
  }
}

const asignarColegioController = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const admins = await obtenerAdmins()
      const colegios = await obtenerColegios()
      res.json({ admins, colegios })
    } else if (req.method === 'POST') {
      const { usuario_id, colegio_id } = req.body
      const asignacion = await asignarColegio(usuario_id, colegio_id)
      res.json(asignacion)
    }
  } catch (error) {
    console.log(error)
  }
}
export { crearColegioController, obtenerColegioController, actualizarColegioController, eliminarColegioController, crearAdminController, obtenerAdminsController, actualizarAdminsController, eliminarAdminController, asignarColegioController }
