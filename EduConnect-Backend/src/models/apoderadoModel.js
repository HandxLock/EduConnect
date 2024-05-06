import pool from '../../dbase/config.js'

const createApoderadoModel = async (usuarioID, colegioID) => {
  const SQLQuery = {
    text: 'INSERT INTO colegio.apoderados (usuario_id, colegio_id) VALUES ($1, $2) RETURNING *',
    values: [usuarioID, colegioID]
  }
  const response = await pool.query(SQLQuery)

  return response.rows[0]
}

const modifyApoderadoModel = async (apoderadoID, usuarioID, colegioID) => {
  try {
    console.log('info recibida en modelo apoderados: ', apoderadoID, usuarioID, colegioID)
    const response = await pool.query('UPDATE colegio.apoderados SET usuario_id=$1, colegio_id=$2 WHERE apoderado_id=$3 RETURNING *',
      [usuarioID, colegioID, apoderadoID])
    return response.rows
  } catch (error) {
    throw new Error('Error modificando el registro del apoderado:' + error.message)
  }
}

const getAllApoderadosModel = async () => {
  try {
    const allApoderados = await pool.query('SELECT * FROM colegio.apoderados')
    console.log(allApoderados)
    return allApoderados.rows
  } catch (error) {
    throw new Error('Error al buscar el registro de apoderados:' + error.message)
  }
}

const getApoderadoByUsuarioIdModel = async (usuarioId) => {
  try {
    const SQLQuery = {
      text: 'SELECT * FROM colegio.apoderados WHERE usuario_id = $1',
      values: [usuarioId]
    }
    const response = await pool.query(SQLQuery)
    return response.rows
  } catch (error) {
    throw new Error('Error al buscar en el registro de apoderados:' + error.message)
  }
}

const getApoderadoByAlumnoModel = async (alumnoId) => {
  try {
    const SQLQuery = {
      text: 'SELECT * FROM colegio.apoderados apo JOIN colegio.alumnos alu ON apo.apoderado_id=alu.apoderado_id WHERE alu.alumno_id = $1',
      values: [alumnoId]
    }
    const response = await pool.query(SQLQuery)
    return response.rows
  } catch (error) {
    throw new Error('Error al buscar en el registro de apoderados:' + error.message)
  }
}

const deleteApoderadoModel = async (apoderadoID) => {
  try {
    const response = await pool.query('DELETE from colegio.apoderados WHERE apoderado_id=$1',
      [apoderadoID])
    return response.rowCount
  } catch (error) {
    throw new Error('Error al intentar eliminar el registro del apoderado:' + error.message)
  }
}

export { createApoderadoModel, getApoderadoByUsuarioIdModel, deleteApoderadoModel, modifyApoderadoModel, getAllApoderadosModel, getApoderadoByAlumnoModel }
