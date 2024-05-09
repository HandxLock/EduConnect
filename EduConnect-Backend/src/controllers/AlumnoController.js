/* eslint-disable camelcase */
import { obtenerNombrePorCursoID } from '../models/alumnoModel.js'

const obtenerNombrePorCursoIDController = async (req, res) => {
  try {
    const { curso_id } = req.params
    const data = await obtenerNombrePorCursoID(curso_id)
    console.log(data)
    res.json(data)
  } catch (error) {
    console.error('Error al recibir el nombres por curso id:', error.message)
    res.status(500).json({ error: 'No se Muestran nombres por curso id' })
  }
}

export default obtenerNombrePorCursoIDController
