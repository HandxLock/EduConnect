import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { getPermisosByPerfilModel } from '../src/models/UsuarioModel.js'

const validarPermisoCRUDColegio = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token Invalido' })
    }
    const permiso = await getPermisosByPerfilModel(user.perfil_id, 1)
    if (!permiso) {
      return res.status(401).json({ message: 'Perfil sin permisos para modificar el registro de colegios, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoCRUDAdmin = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permiso = await getPermisosByPerfilModel(user.perfil_id, 2)
    if (!permiso) {
      return res.status(401).json({ message: 'Perfil sin permisos para modificar el registro de Admins, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoCRUDAlumno = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permiso = await getPermisosByPerfilModel(user.perfil_id, 3)
    if (!permiso) {
      return res.status(401).json({ message: 'Perfil sin permisos para modificar el registro de Alumnos, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoCRUDAsignatura = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permiso = await getPermisosByPerfilModel(user.perfil_id, 4)
    if (!permiso) {
      return res.status(401).json({ message: 'Perfil sin permisos para modificar el registro de Asignaturas, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoCRUDCurso = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permiso = await getPermisosByPerfilModel(user.perfil_id, 5)
    if (!permiso) {
      return res.status(401).json({ message: 'Perfil sin permisos para modificar el registro de cursos, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoCRUDDocentes = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permiso = await getPermisosByPerfilModel(user.perfil_id, 6)
    if (!permiso) {
      return res.status(401).json({ message: 'Perfil sin permisos para modificar el registro de Docentes, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoCRUDApoderados = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permiso = await getPermisosByPerfilModel(user.perfil_id, 7)
    if (!permiso) {
      return res.status(401).json({ message: 'Perfil sin permisos para modificar el registro de Apoderados, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoCRUDEvaluaciones = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permiso = await getPermisosByPerfilModel(user.perfil_id, 8)
    if (!permiso) {
      return res.status(401).json({ message: 'Perfil sin permisos para modificar el registro de Evaluaciones, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoCRUDObersvaciones = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permiso = await getPermisosByPerfilModel(user.perfil_id, 9)
    if (!permiso) {
      return res.status(401).json({ message: 'Perfil sin permisos para modificar el registro de Obersvaciones, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

export { validarPermisoCRUDAdmin, validarPermisoCRUDAlumno, validarPermisoCRUDApoderados, validarPermisoCRUDAsignatura, validarPermisoCRUDColegio, validarPermisoCRUDCurso, validarPermisoCRUDDocentes, validarPermisoCRUDEvaluaciones, validarPermisoCRUDObersvaciones }
