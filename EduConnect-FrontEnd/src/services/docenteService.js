import axios from './axios'

const getDocentes = async () => {
  try {
    const res = await axios.get('/admin/docentes')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export { getDocentes }
