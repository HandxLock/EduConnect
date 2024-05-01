/* eslint-disable camelcase */
import pool from '../../dbase/config.js'

// CRUD COLEGIO

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
    const colegioExiste = await pool.query('SELECT * FROM superadmin.colegios WHERE colegio_id=$1', [colegio_id])
    if (colegioExiste.rows.length === 0) {
      throw new Error('El colegio con el ID especificado no existe')
    } else {
      const colegioActualizado = await pool.query(
        'UPDATE superadmin.colegios SET nombre = $1, descripcion = $2, rut = $3, direccion = $4, telefono = $5, email = $6 WHERE colegio_id = $7 RETURNING *',
        [nombre, descripcion, rut, direccion, telefono, email, colegio_id]
      )
      return colegioActualizado.rows[0]
    }
  } catch (error) {
    throw new Error(`Error al actualizar el colegio: ${error.message}`)
  }
}

const eliminarColegio = async (colegio_id) => {
  try {
    const colegioExiste = await pool.query('SELECT * FROM superadmin.colegios WHERE colegio_id=$1', [colegio_id])
    if (colegioExiste.rows.length === 0) {
      throw new Error('El colegio con el ID especificado no existe')
    } else {
      await pool.query('DELETE FROM superadmin.colegios WHERE colegio_id = $1', [colegio_id])
    }
  } catch (error) {
    throw new Error(`Error al eliminar el colegio: ${error.message}`)
  }
}

// CRUD ADMIN

const crearAdmin = async (rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, perfilId) => {
  try {
    const nuevoAdmin = await pool.query(
      'INSERT INTO perfilamineto.usuarios (rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, perfil_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, perfilId]
    )
    return nuevoAdmin.rows[0]
  } catch (error) {
    console.log(error)
  }
}

const obtenerAdmins = async () => {
  try {
    const admins = await pool.query('SELECT * FROM perfilamiento.usuarios WHERE perfil_id = 2')
    console.log(admins.rows)
    return admins.rows
  } catch (error) {
    console.log(error)
  }
}

const actualizarAdmin = async (usuario_id, rut, nombre, apellido1, apellido2, email, clave, direccion, telefono) => {
  try {
    const adminActualizado = await pool.query(
      'UPDATE perfilamiento.usuarios SET rut = $1, nombre= $2, apellido1 = $3, apellido2 = $4, email = $5 ,clave = $6, direccion = $7, telefono= $8 , fecha_modificacion = NOW() WHERE usuario_id = $9 AND perfil_id = 2 RETURNING *',
      [rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, usuario_id]
    )
    return adminActualizado.rows[0]
  } catch (error) {
    console.log(error)
  }
}

const eliminarAdmin = async (usuario_id) => {
  try {
    await pool.query('DELETE FROM perfilamiento.usuarios WHERE usuario_id = $1 and perfil_id =2', [usuario_id])
  } catch (error) {
    console.log(error)
  }
}

const asignarColegio = async (usuario_id, colegio_id) => {
  try {
    const nuevaAsignacion = await pool.query(
      'INSERT INTO superadmin.admins (usuario_id, colegio_id) VALUES ($1, $2) RETURNING *',
      [usuario_id, colegio_id]
    )
    return nuevaAsignacion.rows[0]
  } catch (error) {
    console.log(error)
  }
}
export { crearColegio, obtenerColegios, actualizarColegio, eliminarColegio, crearAdmin, obtenerAdmins, actualizarAdmin, eliminarAdmin, asignarColegio }
