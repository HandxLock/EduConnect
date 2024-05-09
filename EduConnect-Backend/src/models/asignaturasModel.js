/* eslint-disable camelcase */
import pool from '../../dbase/config.js'

export const createAsignaturaModel = async (nombre, descripcion, colegio_id) => {
  const SQLQuery = {
    text: 'INSERT INTO colegio.asignaturas (nombre, descripcion, colegio_id) VALUES ($1, $2, $3) RETURNING *',
    values: [nombre, descripcion, colegio_id]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

export const getAsignaturaByIdModel = async (asignatura_id) => {
  const SQLQuery = {
    text: 'SELECT * FROM colegio.asignaturas WHERE asignatura_id = $1',
    values: [asignatura_id]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

export const getAllAsignaturasModel = async () => {
  const SQLQuery = {
    text: 'SELECT * FROM colegio.asignaturas'
  }
  const response = await pool.query(SQLQuery)
  return response.rows
}

export const updateAsignaturaModel = async (asignatura_id, nombre, descripcion, colegio_id) => {
  const SQLQuery = {
    text: 'UPDATE colegio.asignaturas SET nombre = $1, descripcion = $2, colegio_id = $3 WHERE asignatura_id = $4 RETURNING *',
    values: [nombre, descripcion, colegio_id, asignatura_id]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

export const deleteAsignaturaModel = async (asignatura_id) => {
  const SQLQuery = {
    text: 'DELETE FROM colegio.asignaturas WHERE asignatura_id = $1 RETURNING *',
    values: [asignatura_id]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

export const idColegioAsignaturaModel = async (usuario_id) => {
  const SQLQuery = {
    text: 'SELECT colegio_id from superadmin.admins WHERE usuario_id = $1',
    values: [usuario_id]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

export const getAsignaturaColegioIdModel = async (colegio_id) => {
  const SQLQuery = {
    text: 'SELECT * FROM colegio.asignaturas WHERE colegio_id = $1',
    values: [colegio_id]
  }
  const response = await pool.query(SQLQuery)
  return response.rows
}
