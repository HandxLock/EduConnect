import pool from '../../dbase/config.js'

const createAsignaturaModel = async (nombre) => {
  const SQLQuery = {
    text: 'INSERT INTO asignatura (nombre) VALUES ($1) RETURNING *',
    values: [nombre]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

const getAsignaturaByIdModel = async (asignatura_id) => {
  const SQLQuery = {
    text: 'SELECT * FROM asignatura WHERE asignatura_id = $1',
    values: [asignatura_id]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

const getAllAsignaturasModel = async () => {
  const SQLQuery = {
    text: 'SELECT * FROM asignatura'
  }
  const response = await pool.query(SQLQuery)
  return response.rows
}

const updateAsignaturaModel = async (asignatura_id, nombre) => {
  const SQLQuery = {
    text: 'UPDATE asignatura SET nombre = $1 WHERE asignatura_id = $2 RETURNING *',
    values: [nombre, asignatura_id]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

const deleteAsignaturaModel = async (asignatura_id) => {
  const SQLQuery = {
    text: 'DELETE FROM asignatura WHERE asignatura_id = $1 RETURNING *',
    values: [asignatura_id]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

export { createAsignaturaModel, getAsignaturaByIdModel, getAllAsignaturasModel, updateAsignaturaModel, deleteAsignaturaModel }
