// Este archivo de controllers aun se encuentra pendiente

import { createAlumnoModel } from '../models/alumnoModel.js'
import { createApoderadoModel } from '../models/apoderadoModel.js'
import { createUsuarioModel } from '../models/Usuariomodel.js'
import { createAsignaturaModel, getAsignaturaByIdModel, getAllAsignaturasModel, updateAsignaturaModel, deleteAsignaturaModel } from '../models/asignaturasModel'
// import sendErrorResponse from '../../utils/utils.js'

/* sección CRUD asignaturas */

/* eslint-disable camelcase */
// sección CRUD asignaturas

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

/* sección CRUD cursos */

/* sección CRUD docentes */

/* sección CRUD alumnos */

const createNewAlumno = async (req, res) => {
  try {
    const { alumno, apoderado } = req.body
    console.log('info ingresada:', alumno, apoderado)
    const newUserAlumno = await createUsuarioModel(alumno.user)
    const newUserApoderado = await createUsuarioModel(apoderado.user)
    console.log('info retornada usuario alumno', newUserAlumno)
    console.log('info retornada usuario apoderado', newUserApoderado)
    console.log('info alumno: ', alumno.colegioID, alumno.cursoID, newUserApoderado.apoderado_id)
    const newApoderado = await createApoderadoModel(newUserApoderado.usuario_id, apoderado.colegioID)
    const newAlumno = await createAlumnoModel(newUserAlumno.usuario_id, alumno.colegioID, newApoderado.apoderado_id, alumno.cursoID)
    return res.status(201).json({ newUserAlumno, newAlumno, newUserApoderado, newApoderado })
  } catch (error) {
    console.error('Error al crear un registro nuevo de alumno:', error)
    return res.status(400).json({ message: 'Error interno del servidor' })
  }
}

/* sección CRUD apoderados */

export { createAsignatura, getAsignaturaById, getAllAsignaturas, updateAsignatura, deleteAsignatura, createNewAlumno }
