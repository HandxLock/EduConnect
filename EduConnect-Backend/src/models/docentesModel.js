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

const modifyDocenteModel = async (docenteID, usuarioID, colegioID, asignaturaID) => {
  try {
    console.log(usuarioID, colegioID, asignaturaID)
    const response = pool.query('UPDATE colegio.docentes SET usuario_id=$1, colegio_id=$2, asignatura_id=$3 WHERE docente_id=$4 RETURNING *',
      [usuarioID, colegioID, asignaturaID, docenteID])
    return response.rows
  } catch (error) {
    throw new Error('Error modificando el registro de docentes:' + error.message)
  }
}

const getAllDocentesModel = async () => {
  try {
    const allDocentes = await pool.query('SELECT * FROM colegio.docentes')
    console.log(allDocentes)
    return allDocentes.rows
  } catch (error) {
    throw new Error('Error al buscar el registro de docentes:' + error.message)
  }
}

const getDocenteByUsuarioIdModel = async (usuarioId) => {
  try {
    const SQLQuery = {
      text: 'SELECT * FROM colegio.docentes WHERE usuario_id = $1',
      values: [usuarioId]
    }
    const response = await pool.query(SQLQuery)
    return response.rows
  } catch (error) {
    throw new Error('Error al buscar en el registro de docentes:' + error.message)
  }
}

const getDocenteByDocenteModel = async (docenteID) => {
  try {
    console.log('docente id recibido modelo: ', docenteID)
    const SQLQuery = {
      text: 'SELECT * FROM colegio.docentes WHERE docente_id = $1',
      values: [docenteID]
    }
    const response = await pool.query(SQLQuery)
    // console.log('respuesta busqueda docente modelo: ', response);
    return response.rows[0]
  } catch (error) {
    throw new Error('Error al buscar en el registro de docentes:' + error.message)
  }
}

const getDocenteByAsignaturaModel = async (asignaturaID) => {
  try {
    const SQLQuery = {
      text: 'SELECT * FROM colegio.docentes WHERE asignatura_id = $1',
      values: [asignaturaID]
    }
    const response = await pool.query(SQLQuery)
    return response.rows
  } catch (error) {
    throw new Error('Error al buscar en el registro de docentes:' + error.message)
  }
}

const getDocenteByCursoModel = async (cursoID) => {
  try {
    const SQLQuery = {
      text: 'SELECT * FROM colegio.docentes doce JOIN colegio.docentesPorCurso doce_cur ON doce.docente_id=doce_cur.docente_id WHERE doce_cur.curso_id = $1',
      values: [cursoID]
    }
    const response = await pool.query(SQLQuery)
    return response.rows
  } catch (error) {
    throw new Error('Error al buscar en el registro de apoderados:' + error.message)
  }
}

const deleteDocenteModel = async (docenteID) => {
  try {
    const response = await pool.query('DELETE from colegio.docentes WHERE docente_id=$1',
      [docenteID])
    return response.rowCount
  } catch (error) {
    throw new Error('Error al intentar eliminar el registro del docente:' + error.message)
  }
}

export { createDocenteModel, getDocenteByUsuarioIdModel, deleteDocenteModel, modifyDocenteModel, getAllDocentesModel, getDocenteByAsignaturaModel, getDocenteByCursoModel, getDocenteByDocenteModel }
