import axios from './axios'

const getApoderados = async () => {
  try {
    const res = await axios.get('/admin/apoderados')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export { getApoderados }
