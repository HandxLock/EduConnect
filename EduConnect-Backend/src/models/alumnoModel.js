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

const modifyAlumnoModel = async (alumnoId, { usuarioID, colegioID, apoderadoID, cursoID }) => {
  try {
    console.log(usuarioID, colegioID, apoderadoID, cursoID)
    const response = pool.query('UPDATE colegio.alumnos SET usuario_id=$1, colegio_id=$2, apoderado_iD=$3, curso_iD=$4 WHERE alumno_id=$5 RETURNING *',
      [usuarioID, colegioID, apoderadoID, cursoID, alumnoId])
    return response.rows
  } catch (error) {
    throw new Error('Error modificando el registro del alumno:' + error.message)
  }
}

const getAllAlumnosModel = async () => {
  try {
    const allAlumnos = await pool.query('SELECT * FROM colegio.alumnos')
    console.log(allAlumnos)
    return allAlumnos.rows
  } catch (error) {
    throw new Error('Error al buscar el registro de almunos:' + error.message)
  }
}

const getAlumnoByUsuarioIdModel = async (usuarioId) => {
  try {
    const SQLQuery = {
      text: 'SELECT * FROM colegio.alumnos WHERE usuario_id = $1',
      values: [usuarioId]
    }
    const response = await pool.query(SQLQuery)
    return response.rows
  } catch (error) {
    throw new Error('Error al buscar en el registro de almunos:' + error.message)
  }
}

const getAlumnoByCursoModel = async (cursoID) => {
  try {
    const SQLQuery = {
      text: 'SELECT * FROM colegio.alumnos WHERE curso_id = $1',
      values: [cursoID]
    }
    const response = await pool.query(SQLQuery)
    return response.rows
  } catch (error) {
    throw new Error('Error al buscar en el registro de almunos:' + error.message)
  }
}

const getAlumnoByApoderadoModel = async (apoderadoID) => {
  try {
    const SQLQuery = {
      text: 'SELECT * FROM colegio.alumnos alu JOIN colegio.apoderados apo ON alu.apoderado_id=apo.apoderado_id WHERE apo.apoderado_id = $1',
      values: [apoderadoID]
    }
    const response = await pool.query(SQLQuery)
    return response.rows
  } catch (error) {
    throw new Error('Error al buscar en el registro de almunos:' + error.message)
  }
}

const getAlumnoByAsignaturaModel = async (asignaturaID) => {
  try {
    const SQLQuery = {
      text: 'SELECT * FROM colegio.alumnos alu JOIN colegio.asignaturasPorAlumno asi_alu ON alu.alumno_id=asi_alu.alumno_id WHERE asi_alu.asignatura_id = $1',
      values: [asignaturaID]
    }
    const response = await pool.query(SQLQuery)
    return response.rows
  } catch (error) {
    throw new Error('Error al buscar en el registro de almunos:' + error.message)
  }
}

const deleteAlumnoModel = async (alumnoId) => {
  try {
    const response = await pool.query('DELETE from colegio.alumnos WHERE alumno_id=$1',
      [alumnoId])
    return response.rowCount
  } catch (error) {
    throw new Error('Error al intentar eliminar el registro de alumno:' + error.message)
  }
}

export { createAlumnoModel, getAlumnoByUsuarioIdModel, deleteAlumnoModel, modifyAlumnoModel, getAllAlumnosModel, getAlumnoByApoderadoModel, getAlumnoByCursoModel, getAlumnoByAsignaturaModel }
