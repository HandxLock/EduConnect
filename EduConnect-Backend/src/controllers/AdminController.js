// Este archivo de controllers aun se encuentra pendiente

import { createAlumnoModel } from '../models/alumnoModel.js'
import { createApoderadoModel } from '../models/apoderadoModel.js'
import { createUsuarioModel } from '../models/Usuariomodel.js'
// import sendErrorResponse from '../../utils/utils.js'

/* sección CRUD asignaturas */

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

export { createNewAlumno }
