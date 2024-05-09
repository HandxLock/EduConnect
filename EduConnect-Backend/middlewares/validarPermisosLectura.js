import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { getPermisosByPerfilModel } from '../src/models/UsuarioModel.js'

const validarPermisoLecturaAlumno = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permisolectura = await getPermisosByPerfilModel(user.perfil_id, 12)
    const permisocrud = await getPermisosByPerfilModel(user.perfil_id, 3)
    if (!permisolectura && !permisocrud) {
      return res.status(401).json({ message: 'Perfil sin permisos para ingresar al registro de alumnos, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoLecturaAsignatura = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permisolectura = await getPermisosByPerfilModel(user.perfil_id, 13)
    const permisocrud = await getPermisosByPerfilModel(user.perfil_id, 4)
    if (!permisolectura && !permisocrud) {
      return res.status(401).json({ message: 'Perfil sin permisos para ingresar al registro de lecturas, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoLecturaCurso = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permisolectura = await getPermisosByPerfilModel(user.perfil_id, 14)
    const permisocrud = await getPermisosByPerfilModel(user.perfil_id, 5)
    if (!permisolectura && !permisocrud) {
      return res.status(401).json({ message: 'Perfil sin permisos para ingresar al registro de cursos, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoLecturaColegio = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permisolectura = await getPermisosByPerfilModel(user.perfil_id, 10)
    const permisocrud = await getPermisosByPerfilModel(user.perfil_id, 1)
    if (!permisolectura && !permisocrud) {
      return res.status(401).json({ message: 'Perfil sin permisos para ingresar al registro de colegios, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoLecturaAdmin = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permisolectura = await getPermisosByPerfilModel(user.perfil_id, 11)
    const permisocrud = await getPermisosByPerfilModel(user.perfil_id, 2)
    if (!permisolectura && !permisocrud) {
      return res.status(401).json({ message: 'Perfil sin permisos para ingresar al registro de Admins, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoLecturaEvaluaciones = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permisolectura = await getPermisosByPerfilModel(user.perfil_id, 15)
    const permisocrud = await getPermisosByPerfilModel(user.perfil_id, 8)
    if (!permisolectura && !permisocrud) {
      return res.status(401).json({ message: 'Perfil sin permisos para ingresar al registro de evaluaciones, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoLecturaObersvaciones = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permisolectura = await getPermisosByPerfilModel(user.perfil_id, 16)
    const permisocrud = await getPermisosByPerfilModel(user.perfil_id, 9)
    if (!permisolectura && !permisocrud) {
      return res.status(401).json({ message: 'Perfil sin permisos para ingresar al registro de obersvaciones, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

const validarPermisoLecturaApoderados = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'No Token, autorizacion denegada' })
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: 'Token Invalido' })
    const permisolectura = await getPermisosByPerfilModel(user.perfil_id, 17)
    const permisocrud = await getPermisosByPerfilModel(user.perfil_id, 7)
    if (!permisolectura && !permisocrud) {
      return res.status(401).json({ message: 'Perfil sin permisos para ingresar al registro de apoderados, autorizacion denegada' })
    }
    console.log(user)
  })
  next()
}

export { validarPermisoLecturaAlumno, validarPermisoLecturaAsignatura, validarPermisoLecturaCurso, validarPermisoLecturaColegio, validarPermisoLecturaAdmin, validarPermisoLecturaEvaluaciones, validarPermisoLecturaApoderados, validarPermisoLecturaObersvaciones }
