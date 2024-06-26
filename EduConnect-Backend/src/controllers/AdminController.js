// Este archivo de controllers aun se encuentra pendiente

import { createAlumnoModel, deleteAlumnoModel, getAllAlumnosModel, getUsuarioByAlumnoModel, modifyAlumnoModel } from '../models/alumnoModel.js'

import { createApoderadoModel, getApoderadoByAlumnoModel, getApoderadoByUsuarioIdModel, modifyApoderadoModel } from '../models/apoderadoModel.js'
import { createUsuarioModel, deleteUsuarioModel, getUsuarioByRutModel, getUsuarioByUsuarioIdModel, modifyUsuarioModel } from '../models/UsuarioModel.js'
import { createDocenteModel, deleteDocenteModel, getAllDocentesModel, getDocenteByDocenteModel, modifyDocenteModel, getDocentePorColegioId, createAsignacionCursoModel } from '../models/docentesModel.js'
import { createAsignaturaModel, getAsignaturaByIdModel, getAllAsignaturasModel, updateAsignaturaModel, deleteAsignaturaModel, getAsignaturaColegioIdModel } from '../models/asignaturasModel.js'
import { createCursoModel, getCursoByIdModel, getCursosModel, updateCursoModel, deleteCursoModel, getCursoPorCOlegioIdModel, getCursosPorUsuarioId } from '../models/cursosModel.js'

// import sendErrorResponse from '../../utils/utils.js'

/* eslint-disable camelcase */
// sección CRUD asignaturas

export const createAsignatura = async (req, res) => {
  try {
    const { nombre, descripcion, colegio_id } = req.body

    const nuevaAsignatura = await createAsignaturaModel(nombre, descripcion, colegio_id)
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
    const { nombre, descripcion, colegio_id } = req.body
    if (!asignatura_id) {
      return res.status(400).json({ message: 'ID de asignatura no proporcionado' })
    }
    const asignaturaActualizada = await updateAsignaturaModel(asignatura_id, nombre, descripcion, colegio_id)
    // return res.status(200).json(asignaturaActualizada)
    if (asignaturaActualizada) {
      return res.status(200).json(asignaturaActualizada)
    } else {
      return res.status(404).json({ message: 'Asignatura no encontrada' })
    }
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

export const getAsignaturaColegioId = async (req, res) => {
  const { colegio_id } = req.params
  if (!colegio_id) {
    return res.status(400).json({ message: 'ID de asignatura no proporcionado' })
  }
  const asignaturaColegio = await getAsignaturaColegioIdModel(colegio_id)
  return res.status(200).json(asignaturaColegio)
}

/* sección CRUD cursos */

export const createCurso = async (req, res) => {
  const { nombre, descripcion, colegio_id } = req.body
  try {
    const newCourse = await createCursoModel(nombre, descripcion, colegio_id)
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
  const { curso_id } = req.params
  const { nombre, descripcion, colegio_id } = req.body
  if (!curso_id || !nombre || !descripcion || !colegio_id) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' })
  }
  try {
    const updatedCourse = await updateCursoModel(curso_id, nombre, descripcion, colegio_id)
    return res.status(200).json(updatedCourse)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteCurso = async (req, res) => {
  const { curso_id } = req.params
  if (!curso_id) {
    return res.status(400).json({ message: 'ID de curso no proporcionado' })
  }
  try {
    await deleteCursoModel(curso_id)
    return res.status(204).end()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getCursoPorColegioIdController = async (req, res) => {
  const { colegio_id } = req.params
  if (!colegio_id) {
    return res.status(400).json({ message: 'ID de curso no proporcionado' })
  }
  try {
    const cursoColegio = await getCursoPorCOlegioIdModel(colegio_id)
    return res.status(200).json(cursoColegio)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getCursoPorUsuarioIdController = async (req, res) => {
  const { usuario_id } = req.params
  try {
    const cursos = await getCursosPorUsuarioId(usuario_id)
    return res.status(200).json(cursos)
  } catch (error) {
    console.log(error)
  }
}
/* sección CRUD docentes */

const createNewDocente = async (req, res) => {
  try {
    const { usuarioID, colegioID, asignaturaID } = req.body
    // console.log('info ingresada:', docente)
    const newUserDocente = await createUsuarioModel(usuarioID.user)
    // console.log('info retornada usuario docente', newUserDocente)
    // console.log('info alumno: ', docente.colegioID, docente.asignaturaID, newUserDocente.user_id)
    const NewDocente = await createDocenteModel(newUserDocente.usuario_id, colegioID, asignaturaID)
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
    const { docente_id } = req.params
    // console.log('docente id recibido: ', docente_id)
    const finddocente = await getDocenteByDocenteModel(docente_id)
    if (finddocente) {
      // console.log('docente encontrado: ', finddocente)
      const { docente } = req.body
      const usuarioDocenteActualizado = await modifyUsuarioModel(finddocente.usuario_id, docente.user)
      const docenteActualizado = await modifyDocenteModel(docente_id, finddocente.usuario_id, docente.ColegioID, docente.asignaturaID)
      return res.json(docenteActualizado, usuarioDocenteActualizado)
    } else {
      return res.status(404).json({ message: 'Docente no encontrado' })
    }
  } catch (error) {
    console.log(error)
  }
}

const getDocenteByIDController = async (req, res) => {
  try {
    const { docente_id } = req.params
    // console.log('docente id recibido: ', docente_id)
    const finddocente = await getDocenteByDocenteModel(docente_id)
    if (finddocente) {
      // console.log('docente encontrado: ', finddocente)
      const usuarioDocente = await getUsuarioByUsuarioIdModel(finddocente.usuario_id)
      res.json({ finddocente, usuarioDocente })
    } else {
      return res.status(404).json({ message: 'Docente no encontrado' })
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteDocenteController = async (req, res) => {
  try {
    const { docente_id } = req.params
    // console.log('id docente recibido en controller: ', docente_id)
    const usuarioDocente = await getDocenteByDocenteModel(docente_id)
    if (usuarioDocente) {
      // console.log('usuario buscado por id docente: ', usuarioDocente)
      await deleteDocenteModel(docente_id)
      await deleteUsuarioModel(usuarioDocente.usuario_id)
      return res.json({ mensaje: 'Docente eliminado exitosamente' })
    } else {
      return res.status(404).json({ message: 'Docente no encontrado' })
    }
  } catch (error) {
    console.error('Error al eliminar el docente:', error.message)
    res.status(500).json({ error: 'No se encuentra ID para eliminar el docente' })
  }
}

const getDocentePorColegioIdController = async (req, res) => {
  try {
    const { colegio_id } = req.params
    const docenteId = await getDocentePorColegioId(colegio_id)
    res.json(docenteId)
  } catch (error) {
    console.error('Error al obtener id docente:', error.message)
    res.status(500).json({ error: 'No se encuentra id docente' })
  }
}

const createAsignacionCursoController = async (req, res) => {
  try {
    const { docente_id, curso_id } = req.body
    console.log(docente_id)
    console.log(curso_id)
    const asignacion = await createAsignacionCursoModel(docente_id, curso_id)
    console.log(asignacion)
    res.json(asignacion)
  } catch (error) {
    console.error('Error al asignar docente:', error.message)
    res.status(500).json({ error: 'Error al asignar docente:' })
  }
}
/* sección CRUD alumnos */

const createNewAlumno = async (req, res) => {
  try {
    const { alumno, apoderado } = req.body
    const newUserAlumno = await createUsuarioModel(alumno.user)
    const findUserApoderado = await getUsuarioByRutModel(apoderado.user.rut)
    let apoderadoID = ''
    let apoderadoUsuario = {}
    let apoderadoResponse = {}
    if (!findUserApoderado || findUserApoderado.length === 0) {
      const newUserApoderado = await createUsuarioModel(apoderado.user)
      console.log(newUserApoderado)
      const newApoderado = await createApoderadoModel(newUserApoderado.usuario_id, apoderado.colegioID)
      apoderadoID = newApoderado.apoderado_id
      apoderadoUsuario = newUserApoderado
      apoderadoResponse = newApoderado
    } else {
      console.log('aqui')
      const oldApoderado = await getApoderadoByUsuarioIdModel(findUserApoderado[0].usuario_id)
      apoderadoID = oldApoderado[0].apoderado_id
      apoderadoUsuario = findUserApoderado
      apoderadoResponse = oldApoderado
    }
    const newAlumno = await createAlumnoModel(newUserAlumno.usuario_id, alumno.colegioID, apoderadoID, alumno.cursoID)
    return res.status(201).json({ newUserAlumno, newAlumno, apoderadoUsuario, apoderadoResponse })
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
    const { alumno_id } = req.params
    // console.log('alumno id recibido en controller: ', alumno_id)
    const usuarioAlumno = await getUsuarioByAlumnoModel(alumno_id)
    // console.log('usuario encontrado por el alumno id: ', usuarioAlumno[0].usuario_id)
    const { alumno, apoderado } = req.body
    // console.log('nueva data para alumno recibida en controller: ', alumno, apoderado)
    const apoderadoAlumno = await getApoderadoByAlumnoModel(alumno_id)
    // console.log('apoderado buscado por alumno: ', apoderadoAlumno)
    const usuarioAlumnoActualizado = await modifyUsuarioModel(usuarioAlumno[0].usuario_id, alumno.user)
    // console.log('usuario alumno actualizado: ', usuarioAlumnoActualizado)
    const usuarioApoderadoActualizado = await modifyUsuarioModel(apoderadoAlumno[0].usuario_id, apoderado.user)
    // console.log('usuarios apoderado actualizado: ', usuarioApoderadoActualizado)
    const alumnoActualizado = await modifyAlumnoModel(alumno_id, usuarioAlumno[0].usuario_id, alumno.colegioID, apoderadoAlumno[0].apoderado_id, alumno.cursoID)
    // console.log('registro alumno actualizado: ', alumnoActualizado)
    const apoderadoActualizado = await modifyApoderadoModel(apoderadoAlumno[0].apoderado_id, apoderadoAlumno[0].usuario_id, apoderado.colegioID)
    // console.log('registro apoderado actualizado: ', apoderadoActualizado)
    res.json({ alumnoActualizado, usuarioAlumnoActualizado, usuarioApoderadoActualizado, apoderadoActualizado })
  } catch (error) {
    console.log(error)
  }
}

const deleteAlumnoController = async (req, res) => {
  try {
    const { alumno_id } = req.params
    console.log('alumno id recibido controller', alumno_id)
    const usuarioID = await getUsuarioByAlumnoModel(alumno_id)
    console.log('usuario encontrado segun id en controller: ', usuarioID)
    await deleteAlumnoModel(alumno_id)
    await deleteUsuarioModel(usuarioID)
    res.json({ mensaje: 'Alumno eliminado exitosamente' })
  } catch (error) {
    console.error('Error al eliminar el alumno:', error.message)
    res.status(500).json({ error: 'No se encuentra ID para eliminar el alumno' })
  }
}

/* sección CRUD apoderados */

export { createNewAlumno, createNewDocente, getDocentesController, deleteDocenteController, updateDocenteController, getAlumnosController, updateAlumnoController, deleteAlumnoController, getDocenteByIDController, getDocentePorColegioIdController, createAsignacionCursoController }
