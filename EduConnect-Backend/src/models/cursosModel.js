/* eslint-disable camelcase */
import pool from '../../dbase/config.js'

export const createCursoModel = async (nombre, descripcion, colegio_id) => {
  try {
    const nuevoCurso = await pool.query(
      'INSERT INTO colegio.cursos (nombre, descripcion, colegio_id) VALUES ($1, $2, $3) RETURNING *',
      [nombre, descripcion, colegio_id]
    )
    return nuevoCurso.rows[0]
  } catch (error) {
    console.error('Error al crear el curso:', error.message)
    throw new Error('Error al crear el curso')
  }
}

export const getCursosModel = async () => {
  try {
    const cursos = await pool.query('SELECT * FROM colegio.cursos')
    return cursos.rows
  } catch (error) {
    console.error('Error al obtener los cursos:', error.message)
    throw new Error('Error al obtener los cursos')
  }
}

export const getCursoByIdModel = async (curso_id) => {
  try {
    const curso = await pool.query('SELECT * FROM colegio.cursos WHERE curso_id = $1', [curso_id])
    if (curso.rows.length === 0) {
      throw new Error('No se encontró ningún curso con el ID especificado')
    } else {
      return curso.rows[0]
    }
  } catch (error) {
    console.error(`Error al obtener el curso por ID: ${error.message}`)
    throw new Error('Error al obtener el curso por ID')
  }
}

export const updateCursoModel = async (curso_id, nombre, descripcion, colegio_id) => {
  try {
    const cursoExiste = await pool.query('SELECT * FROM colegio.cursos WHERE curso_id=$1', [curso_id])
    if (cursoExiste.rows.length === 0) {
      throw new Error('El curso con el ID especificado no existe')
    } else {
      const cursoActualizado = await pool.query(
        'UPDATE colegio.cursos SET nombre = $1, descripcion = $2, colegio_id = $3 WHERE curso_id = $4 RETURNING *',
        [nombre, descripcion, colegio_id, curso_id]
      )
      return cursoActualizado.rows[0]
    }
  } catch (error) {
    console.error(`Error al actualizar el curso: ${error.message}`)
    throw new Error('Error al actualizar el curso')
  }
}

export const deleteCursoModel = async (curso_id) => {
  try {
    const cursoExiste = await pool.query('SELECT * FROM colegio.cursos WHERE curso_id=$1', [curso_id])
    if (cursoExiste.rows.length === 0) {
      throw new Error('El curso con el ID especificado no existe')
    } else {
      await pool.query('DELETE FROM colegio.cursos WHERE curso_id = $1', [curso_id])
    }
  } catch (error) {
    console.error(`Error al eliminar el curso: ${error.message}`)
    throw new Error('Error al eliminar el curso')
  }
}
