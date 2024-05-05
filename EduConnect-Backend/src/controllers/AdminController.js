// Este archivo de controllers aun se encuentra pendiente

import { createAlumnoModel, deleteAlumnoModel, getAllAlumnosModel, getUsuarioByAlumnoModel, modifyAlumnoModel } from '../models/alumnoModel.js'
import { createApoderadoModel } from '../models/apoderadoModel.js'
import { createUsuarioModel, deleteUsuarioModel, modifyUsuarioModel } from '../models/UsuarioModel.js'
import { createDocenteModel, deleteDocenteModel, getAllDocentesModel, getDocenteByUsuarioIdModel, modifyDocenteModel } from '../models/docentesModel.js'
import { createAsignaturaModel, getAsignaturaByIdModel, getAllAsignaturasModel, updateAsignaturaModel, deleteAsignaturaModel } from '../models/asignaturasModel.js'
import { createCursoModel, getCursoByIdModel, getCursosModel, updateCursoModel, deleteCursoModel } from '../models/cursosModel.js'
// import sendErrorResponse from '../../utils/utils.js'

/* eslint-disable camelcase */
// sección CRUD asignaturas

export const createAsignatura = async (req, res) => {
  try {
    const { nombre, descripcion, colegio_id, docente_id } = req.body

    if (!nombre || !descripcion || !colegio_id || !docente_id) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' })
    }
    const nuevaAsignatura = await createAsignaturaModel(nombre, descripcion, colegio_id, docente_id)
    return res.status(201).json(nuevaAsignatura)
  } catch (error) {
    console.error('Error al crear una nueva asignatura:', error)
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

export const getAsignaturaById = async (req, res) => {
  try {
    const { asignatura_id } = req.params
    if (!asignatura_id) {
      return res.status(400).json({ message: 'ID de asignatura no proporcionado' })
    }
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

export const getAllAsignaturas = async (req, res) => {
  try {
    const asignaturas = await getAllAsignaturasModel()
    return res.status(200).json(asignaturas)
  } catch (error) {
    console.error('Error al obtener todas las asignaturas:', error)
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

export const updateAsignatura = async (req, res) => {
  try {
    const { asignatura_id } = req.params
    const { nombre, descripcion, colegio_id, docente_id } = req.body
    if (!asignatura_id) {
      return res.status(400).json({ message: 'ID de asignatura no proporcionado' })
    }
    if (!nombre || !descripcion || !colegio_id || !docente_id) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' })
    }
    const asignaturaActualizada = await updateAsignaturaModel(asignatura_id, nombre, descripcion, colegio_id, docente_id)
    return res.status(200).json(asignaturaActualizada)
  } catch (error) {
    console.error('Error al actualizar una asignatura:', error)
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

export const deleteAsignatura = async (req, res) => {
  try {
    const { asignatura_id } = req.params
    if (!asignatura_id) {
      return res.status(400).json({ message: 'ID de asignatura no proporcionado' })
    }
    const asignaturaEliminada = await deleteAsignaturaModel(asignatura_id)
    return res.status(200).json(asignaturaEliminada)
  } catch (error) {
    console.error('Error al eliminar una asignatura:', error)
    return res.status(500).json({ message: 'Error interno del servidor' })
  }
}

/* sección CRUD cursos */

export const createCurso = async (req, res) => {
  const { name, description, school_id } = req.body
  if (!name || !description || !school_id) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' })
  }
  try {
    const newCourse = await createCursoModel(name, description, school_id)
    return res.status(201).json(newCourse)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getCurso = async (req, res) => {
  try {
    const courses = await getCursosModel()
    return res.status(200).json(courses)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getCursoById = async (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ message: 'ID de curso no proporcionado' })
  }
  try {
    const course = await getCursoByIdModel(id)
    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' })
    }
    return res.status(200).json(course)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const updateCurso = async (req, res) => {
  const { id } = req.params
  const { name, description, school_id } = req.body
  if (!id || !name || !description || !school_id) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' })
  }
  try {
    const updatedCourse = await updateCursoModel(id, name, description, school_id)
    return res.status(200).json(updatedCourse)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteCurso = async (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ message: 'ID de curso no proporcionado' })
  }
  try {
    await deleteCursoModel(id)
    return res.status(204).end()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

/* sección CRUD docentes */

const createNewDocente = async (req, res) => {
  try {
    const { docente } = req.body
    console.log('info ingresada:', docente)
    const newUserDocente = await createUsuarioModel(docente.user)
    console.log('info retornada usuario docente', newUserDocente)
    console.log('info alumno: ', docente.colegioID, docente.asignaturaID, newUserDocente.user_id)
    const NewDocente = await createDocenteModel(newUserDocente.usuario_id, docente.colegioID, docente.asignaturaID)
    return res.status(201).json({ newUserDocente, NewDocente })
  } catch (error) {
    console.error('Error al crear un registro nuevo de docente:', error)
    return res.status(400).json({ message: 'Error interno del servidor' })
  }
}

const getDocentesController = async (req, res) => {
  try {
    const admins = await getAllDocentesModel()
    res.json(admins)
    console.log(admins)
  } catch (error) {
    console.error('Error al buscar el registro de docentes:', error.message)
    res.status(500).json({ error: 'No se encuentra la info de docentes' })
  }
}

const updateDocenteController = async (req, res) => {
  try {
    const { docenteID } = req.params
    console.log('docente id recibido: ', docenteID)
    const usuario = getDocenteByUsuarioIdModel(docenteID)
    console.log('usuario encontrado')
    const { docente } = req.body
    const usuarioDocenteActualizado = await modifyUsuarioModel(usuario.usuario_id, docente.user)
    const docenteActualizado = await modifyDocenteModel(docenteID, usuario.usuario_id, docente.ColegioID, docente.asignaturaID)
    res.json(docenteActualizado, usuarioDocenteActualizado)
  } catch (error) {
    console.log(error)
  }
}

const deleteDocenteController = async (req, res) => {
  try {
    const { docenteID } = req.params
    const usuarioID = getDocenteByUsuarioIdModel(docenteID)
    await deleteDocenteModel(docenteID)
    await deleteUsuarioModel(usuarioID)
    res.json({ mensaje: 'Docente eliminado exitosamente' })
  } catch (error) {
    console.error('Error al eliminar el docente:', error.message)
    res.status(500).json({ error: 'No se encuentra ID para eliminar el docente' })
  }
}

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

const getAlumnosController = async (req, res) => {
  try {
    const alumnos = await getAllAlumnosModel()
    res.json(alumnos)
  } catch (error) {
    console.error('Error al buscar el registro de alumnos:', error.message)
    res.status(500).json({ error: 'No se encuentra la info de alumnos' })
  }
}

const updateAlumnoController = async (req, res) => {
  try {
    const { alumnoID } = req.params
    const usuarioID = getUsuarioByAlumnoModel(alumnoID)
    const { alumno } = req.body
    const usuarioAlumnoActualizado = await modifyUsuarioModel(usuarioID, alumno.user)
    const alumnoActualizado = await modifyAlumnoModel(alumnoID, usuarioID, alumno.colegioID, alumno.apoderadoID, alumno.curdoID)
    res.json(alumnoActualizado, usuarioAlumnoActualizado)
  } catch (error) {
    console.log(error)
  }
}

const deleteAlumnoController = async (req, res) => {
  try {
    const { alumnoID } = req.params
    const usuarioID = getUsuarioByAlumnoModel(alumnoID)
    await deleteAlumnoModel(alumnoID)
    await deleteUsuarioModel(usuarioID)
    res.json({ mensaje: 'Alumno eliminado exitosamente' })
  } catch (error) {
    console.error('Error al eliminar el alumno:', error.message)
    res.status(500).json({ error: 'No se encuentra ID para eliminar el alumno' })
  }
}

/* sección CRUD apoderados */

export { createNewAlumno, createNewDocente, getDocentesController, deleteDocenteController, updateDocenteController, getAlumnosController, updateAlumnoController, deleteAlumnoController }
