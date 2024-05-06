import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://educonnect-f34m.onrender.com',
  withCredentials: true
})

export default instance
