import pool from '../../dbase/config.js'

const createAlumnoModel = async (usuarioID, colegioID, apoderadoID, cursoID) => {
  // console.log('info ingresada en modelo alumno: ', usuarioID, colegioID, apoderadoID, cursoID)
  const SQLQuery = {
    text: 'INSERT INTO colegio.alumnos (usuario_id, colegio_id, apoderado_id, curso_id) VALUES ($1, $2, $3, $4) RETURNING *',
    values: [usuarioID, colegioID, apoderadoID, cursoID]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

export { createAlumnoModel }
