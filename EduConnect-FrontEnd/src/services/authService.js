/* eslint-disable camelcase */
import axios from './axios'

const loginUser = (email, password) => {
  const user = { email, password }
  return axios.post('/login', user)
}
const verificarTokenRequest = () => axios.get('/verify')

export { loginUser, verificarTokenRequest }
