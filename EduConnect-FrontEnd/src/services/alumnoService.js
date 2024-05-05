import axios from './axios'

const getAlumnos = async () => {
  try {
    const res = await axios.get('/admin/alumnos')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export { getAlumnos }
