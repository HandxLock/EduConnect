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

const personByEmailModel = async ({ email }) => {
  // console.log(email);
  const SQLQuery = {
    text: 'SELECT * FROM usuarios WHERE email = $1',
    values: [email]
  }
  // console.log(SQLQuery);
  const response = await pool.query(SQLQuery)
  // console.log(response.rows[0]);
  return response.rows[0]
}

export { createUsuarioModel, personByEmailModel }
