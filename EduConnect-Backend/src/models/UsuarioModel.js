import pool from '../../dbase/config.js'
import bcrypt from 'bcryptjs'

const createUsuarioModel = async ({ rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, perfilId }) => {
  const hashedClave = bcrypt.hashSync(clave)
  const SQLQuery = {
    text: 'INSERT INTO perfilamiento.usuarios (rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, perfil_id, fecha_creacion, fecha_modificacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW()) RETURNING *',
    values: [rut, nombre, apellido1, apellido2, email, hashedClave, direccion, telefono, perfilId]
  }
  const response = await pool.query(SQLQuery)

  return response.rows[0]
}

const userByEmailModel = async (email) => {
  // console.log('correo en modelo: ', email)
  const SQLQuery = {
    text: 'SELECT * FROM perfilamiento.usuarios WHERE email = $1',
    values: [email]
  }
  // console.log('info de la query', SQLQuery)
  const response = await pool.query(SQLQuery)
  // console.log('respuesta que se devuelve', response.rows[0])
  return response.rows[0]
}

const modifyUsuarioModel = async (usuarioId, { rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, perfilId }) => {
  try {
    console.log('usuario id recibido en modificador de usuario en modelo: ', usuarioId)
    console.log('datos recibidos para modificar usuario en modelo: ', rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, perfilId)
    const hashedClave = bcrypt.hashSync(clave)
    const SQLQuery = {
      text: 'UPDATE perfilamiento.usuarios SET rut = $1, nombre = $2, apellido1 = $3, apellido2 = $4, email = $5, clave = $6, direccion = $7, telefono = $8, perfil_id = $9, fecha_modificacion = now() WHERE usuario_id=$10 RETURNING *',
      values: [rut, nombre, apellido1, apellido2, email, hashedClave, direccion, telefono, perfilId, usuarioId]
    }
    const response = await pool.query(SQLQuery)
    // console.log('respuesta de la query: ', response)
    return response.rows[0]
  } catch (error) {
    throw new Error('Error modificando el registro del usuario:' + error.message)
  }
}

const getAllUsuariosModel = async () => {
  try {
    const allUsuarios = await pool.query('SELECT * FROM perfilamiento.usuarios')
    console.log(allUsuarios)
    return allUsuarios.rows
  } catch (error) {
    throw new Error('Error al buscar el registro de usuarios:' + error.message)
  }
}

const getUsuarioByUsuarioIdModel = async (usuarioId) => {
  try {
    const SQLQuery = {
      text: 'SELECT * FROM perfilamiento.usuarios WHERE usuario_id = $1',
      values: [usuarioId]
    }
    const response = await pool.query(SQLQuery)
    return response.rows
  } catch (error) {
    throw new Error('Error al buscar en el registro de usuarios:' + error.message)
  }
}

const getUsuarioByPerfilModel = async (perfilId) => {
  try {
    const SQLQuery = {
      text: 'SELECT * FROM perfilamiento.usuarios WHERE perfil_id = $1',
      values: [perfilId]
    }
    const response = await pool.query(SQLQuery)
    return response.rows
  } catch (error) {
    throw new Error('Error al buscar en el registro de usuarios:' + error.message)
  }
}

const getUsuarioByRutModel = async (rut) => {
  try {
    const SQLQuery = {
      text: 'SELECT * FROM perfilamiento.usuarios WHERE rut = $1',
      values: [rut]
    }
    const response = await pool.query(SQLQuery)
    return response.rows
  } catch (error) {
    throw new Error('Error al buscar en el registro de usuarios:' + error.message)
  }
}

const deleteUsuarioModel = async (usuarioID) => {
  try {
    const response = await pool.query('DELETE from perfilamiento.usuarios WHERE usuario_id=$1',
      [usuarioID])
    return response.rowCount
  } catch (error) {
    throw new Error('Error al intentar eliminar el registro de usuario:' + error.message)
  }
}

export { createUsuarioModel, userByEmailModel, getUsuarioByUsuarioIdModel, deleteUsuarioModel, modifyUsuarioModel, getAllUsuariosModel, getUsuarioByPerfilModel, getUsuarioByRutModel }
