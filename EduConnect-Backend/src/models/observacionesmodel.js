/* eslint-disable camelcase */
import pool from '../../dbase/config.js'

// eslint-disable-next-line camelcase
export const crearObservacionModel = async (titulo, descripcion, docente_id, alumno_id) => {
  try {
    const resultado = await pool.query(
      'INSERT INTO colegio.observaciones(titulo, descripcion, docente_id, alumno_id) VALUES ($1,$2, $3, $4) RETURNING *',
      // eslint-disable-next-line camelcase
      [titulo, descripcion, docente_id, alumno_id]
    )
    console.log(titulo, descripcion, docente_id, alumno_id)
    console.log(resultado.rows)
    return resultado.rows[0]
  } catch (error) {
    throw new Error('Error creando observacion:' + error.message)
  }
}

export const modificarObservacionModel = async (observacion_id, { titulo, descripcion, docente_id, alumno_id }) => {
  try {
    console.log(observacion_id, titulo, descripcion, docente_id, alumno_id)
    const resultado = pool.query('UPDATE colegio.observaciones SET titulo=$1, descripcion=$2, docente_id=$3, alumno_id=$4 WHERE observacion_id=$5 RETURNING *',
      [titulo, descripcion, docente_id, alumno_id, observacion_id])
    return resultado.rows
  } catch (error) {
    throw new Error('Error modificando observacion:' + error.message)
  }
}

export const obtenerTodaObservacionModel = async () => {
  try {
    const todaObservacion = await pool.query('SELECT * FROM colegio.observaciones')
    console.log(todaObservacion)
    return todaObservacion.rows
  } catch (error) {
    throw new Error('Error al obtener:' + error.message)
  }
}

export const obtenerTodaObservacionUserId = async (usuario_id) => {
  try {
    const todaObservacion = await pool.query('SELECT   o.observacion_id,   o.fecha_observacion,   o.descripcion,   o.alumno_id,   u.nombre AS alumno_nombre,   u.nombre AS docente_nombre FROM colegio.observaciones AS o JOIN colegio.alumnos AS a ON o.alumno_id = a.alumno_id JOIN perfilamiento.usuarios AS u ON u.usuario_id = a.usuario_id WHERE a.usuario_id = $1', [usuario_id])
    console.log(todaObservacion)
    return todaObservacion.rows
  } catch (error) {
    throw new Error('Error al obtener:' + error.message)
  }
}

export const eliminarObservacionModel = async (observacion_id) => {
  try {
    const resultado = await pool.query('DELETE from colegio.observaciones WHERE observacion_id=$1',
      [observacion_id])
    return resultado.rowCount
  } catch (error) {
    throw new Error('Error eliminando observacion:' + error.message)
  }
}
