/* eslint-disable camelcase */
import pool from '../../dbase/config.js'

const createEvaluacionModel = async ({ alumnoId, evaluacionData }) => {
  const { nombre, calificacion, fechaEvaluacion } = evaluacionData
  const SQLQuery = {
    text: 'INSERT INTO colegio.evaluacionesPorAlumno (alumno_id, nombre, calificacion, fecha_evaluacion) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    values: [alumnoId, nombre, calificacion, fechaEvaluacion]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

const calificarEvaluacionModel = async ({ alumnoId, evaluacionData }) => {
  const { nombre, calificacion, fechaEvaluacion } = evaluacionData
  const SQLQuery = {
    text: 'INSERT INTO colegio.evaluacionesPorAlumno (alumno_id, nombre, calificacion, fecha_evaluacion) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    values: [alumnoId, nombre, calificacion, fechaEvaluacion]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

const getEvaluacionesByAlumnoIdModel = async (alumnoId) => {
  const SQLQuery = {
    text: 'SELECT * FROM colegio.evaluacionesPorAlumno WHERE alumno_id = $1',
    values: [alumnoId]
  }
  const response = await pool.query(SQLQuery)
  return response.rows
}

const updateEvaluacionModel = async (evaluacionId, evaluacionData) => {
  const { nombre, calificacion, fechaEvaluacion } = evaluacionData
  const SQLQuery = {
    text: 'UPDATE evaluacionesPorAlumno SET nombre = $1, calificacion = $2, fecha_evaluacion = $3 WHERE evaluacion_id = $4 RETURNING *',
    values: [nombre, calificacion, fechaEvaluacion, evaluacionId]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

const deleteEvaluacionModel = async (evaluacionId) => {
  const SQLQuery = {
    text: 'DELETE FROM evaluacionesPorAlumno WHERE evaluacion_id = $1 RETURNING *',
    values: [evaluacionId]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

const getEvaluacionesByUsuarioIdModel = async (usuario_id) => {
  const SQLQuery = {
    text: 'SELECT epa.*, e.nombre AS nombre_evaluacion, e.descripcion AS descripcion_evaluacion FROM colegio.evaluacionesPorAlumno AS epa JOIN colegio.alumnos AS a ON epa.alumno_id = a.alumno_id JOIN colegio.evaluaciones AS e ON epa.evaluacion_id = e.evaluacion_id JOIN perfilamiento.usuarios AS u ON a.usuario_id = u.usuario_id WHERE u.usuario_id = $1; ',
    values: [usuario_id]
  }
  const response = await pool.query(SQLQuery)
  return response.rows
}

export { createEvaluacionModel, calificarEvaluacionModel, getEvaluacionesByAlumnoIdModel, updateEvaluacionModel, deleteEvaluacionModel, getEvaluacionesByUsuarioIdModel }
