import pool from '../../dbase/config.js'

const createApoderadoModel = async (usuarioID, colegioID) => {
  const SQLQuery = {
    text: 'INSERT INTO colegio.apoderados (usuario_id, colegio_id) VALUES ($1, $2) RETURNING *',
    values: [usuarioID, colegioID]
  }
  const response = await pool.query(SQLQuery)

  return response.rows[0]
}

export { createApoderadoModel }
