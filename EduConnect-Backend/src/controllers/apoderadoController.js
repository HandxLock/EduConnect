import { getAllApoderadosModel } from '../models/apoderadoModel.js'

const obtenerApoderadosController = async (req, res) => {
  try {
    const apoderados = await getAllApoderadosModel()
    res.json(apoderados)
  } catch (error) {
    console.log(error)
  }
}
export { obtenerApoderadosController }
