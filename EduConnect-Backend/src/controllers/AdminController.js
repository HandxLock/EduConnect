/* eslint-disable camelcase */
// sección CRUD asignaturas
import { createAsignaturaModel, getAsignaturaByIdModel, getAllAsignaturasModel, updateAsignaturaModel, deleteAsignaturaModel } from '../models/asignaturasModel'

const createAsignatura = async (req, res) => {
  try {
    const { nombre } = req.body

    if (!nombre) {
      return res.status(400).json({ message: 'El nombre de la asignatura es requerido' })
    }

    const nuevaAsignatura = await createAsignaturaModel(nombre)
    return res.status(201).json(nuevaAsignatura)
  } catch (error) {
    console.error('Error al crear una nueva asignatura:', error)
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

const getAsignaturaById = async (req, res) => {
  try {
    const { asignatura_id } = req.params
    const asignatura = await getAsignaturaByIdModel(asignatura_id)
    if (asignatura) {
      return res.status(200).json(asignatura)
    } else {
      return res.status(404).json({ message: 'Asignatura no encontrada' })
    }
  } catch (error) {
    console.error('Error al obtener una asignatura por ID:', error)
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

const getAllAsignaturas = async (req, res) => {
  try {
    const asignaturas = await getAllAsignaturasModel()
    return res.status(200).json(asignaturas)
  } catch (error) {
    console.error('Error al obtener todas las asignaturas:', error)
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

const updateAsignatura = async (req, res) => {
  try {
    const { asignatura_id } = req.params
    const { nombre } = req.body

    if (!nombre) {
      return res.status(400).json({ message: 'El nombre de la asignatura es requerido' })
    }

    const asignaturaActualizada = await updateAsignaturaModel(asignatura_id, nombre)
    return res.status(200).json(asignaturaActualizada)
  } catch (error) {
    console.error('Error al actualizar una asignatura:', error)
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

const deleteAsignatura = async (req, res) => {
  try {
    const { asignatura_id } = req.params
    const asignaturaEliminada = await deleteAsignaturaModel(asignatura_id)
    return res.status(200).json(asignaturaEliminada)
  } catch (error) {
    console.error('Error al eliminar una asignatura:', error)
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

export { createAsignatura, getAsignaturaById, getAllAsignaturas, updateAsignatura, deleteAsignatura }

// sección CRUD cursos

// sección CRUD docentes

// sección CRUD alumnos

// sección CRUD apoderados
