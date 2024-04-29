/* eslint-disable camelcase */
import pool from '../../dbase/config.js'

const crearColegio = async (nombre, descripcion, rut, direccion, telefono, email) => {
  try {
    const nuevoColegio = await pool.query(
      'INSERT INTO superadmin.colegios (nombre, descripcion, rut, direccion, telefono, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [nombre, descripcion, rut, direccion, telefono, email]
    )
    return nuevoColegio.rows[0]
  } catch (error) {
    console.error('Error al crear el colegio:', error.message)
  }
}

const obtenerColegios = async () => {
  try {
    const colegios = await pool.query('SELECT * FROM superadmin.colegios')
    return colegios.rows
  } catch (error) {
    console.error('Error al obtener los colegios:', error.message)
  }
}

const actualizarColegio = async (colegio_id, nombre, descripcion, rut, direccion, telefono, email) => {
  try {
    const colegioActualizado = await pool.query(
      'UPDATE superadmin.colegios SET nombre = $1, descripcion = $2, rut = $3, direccion = $4, telefono = $5, email = $6 WHERE colegio_id = $7 RETURNING *',
      // eslint-disable-next-line camelcase
      [nombre, descripcion, rut, direccion, telefono, email, colegio_id]
    )
    return colegioActualizado.rows[0]
  } catch (error) {
    throw new Error(`Error al actualizar el colegio: ${error.message}`)
  }
}

const eliminarColegio = async (colegio_id) => {
  try {
    // eslint-disable-next-line camelcase
    await pool.query('DELETE FROM superadmin.colegios WHERE colegio_id = $1', [colegio_id])
  } catch (error) {
    throw new Error(`Error al eliminar el colegio: ${error.message}`)
  }
}

export { crearColegio, obtenerColegios, actualizarColegio, eliminarColegio }
