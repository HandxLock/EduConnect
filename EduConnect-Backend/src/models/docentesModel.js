import pool from '../../dbase/config.js'

const createDocenteModel = async (usuarioID, colegioID, asignaturaID) => {
  // console.log('info ingresada en modelo alumno: ', usuarioID, colegioID, apoderadoID, cursoID)
  const SQLQuery = {
    text: 'INSERT INTO colegio.docentes (usuario_id, colegio_id, asignatura_id) VALUES ($1, $2, $3) RETURNING *',
    values: [usuarioID, colegioID, asignaturaID]
  }
  const response = await pool.query(SQLQuery)
  return response.rows[0]
}

export { createDocenteModel }
