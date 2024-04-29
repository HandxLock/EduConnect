import pool from '../../dbase/config.js'
import bcrypt from 'bcryptjs'

const createPersonModel = async ({ rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, comunaid }) => {
  const hashedClave = bcrypt.hashSync(clave)
  const SQLQuery = {
    text: 'INSERT INTO usuarios (rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, comunaid) VALUES ($1, $2, $3, $4. $5, $6, $7, $8, $9) RETURNING *',
    values: [rut, nombre, apellido1, apellido2, email, clave, hashedClave, direccion, telefono, comunaid]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

const personByEmailModel = async ({ email }) => {
  // console.log(email);
  const SQLQuery = {
    text: 'SELECT * FROM usuarios WHERE email = $1',
    values: [email]
  }
  // console.log(SQLQuery);
  const response = await pool.query(SQLQuery)
  // console.log(response.rows[0]);
  return response.rows[0]
}

export { createPersonModel, personByEmailModel }

const createEvaluacionModel = async ({ alumnoId, evaluacionData }) => {
  const { nombre, calificacion, fechaEvaluacion } = evaluacionData
  const SQLQuery = {
    text: 'INSERT INTO evaluaciones_por_alumno (alumno_id, nombre, calificacion, fecha_evaluacion) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    values: [alumnoId, nombre, calificacion, fechaEvaluacion]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

const getEvaluacionesByAlumnoIdModel = async (alumnoId) => {
  const SQLQuery = {
    text: 'SELECT * FROM evaluaciones_por_alumno WHERE alumno_id = $1',
    values: [alumnoId]
  }
  const response = await pool.query(SQLQuery)
  return response.rows
}

const updateEvaluacionModel = async (evaluacionId, evaluacionData) => {
  const { nombre, calificacion, fechaEvaluacion } = evaluacionData
  const SQLQuery = {
    text: 'UPDATE evaluaciones_por_alumno SET nombre = $1, calificacion = $2, fecha_evaluacion = $3 WHERE evaluacion_id = $4 RETURNING *',
    values: [nombre, calificacion, fechaEvaluacion, evaluacionId]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

const deleteEvaluacionModel = async (evaluacionId) => {
  const SQLQuery = {
    text: 'DELETE FROM evaluaciones_por_alumno WHERE evaluacion_id = $1 RETURNING *',
    values: [evaluacionId]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

export { createEvaluacionModel, getEvaluacionesByAlumnoIdModel, updateEvaluacionModel, deleteEvaluacionModel }
