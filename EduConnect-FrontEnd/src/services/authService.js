/* eslint-disable camelcase */
import axios from './axios'

const loginUser = (email, password) => {
  const user = { email, password }
  return axios.post('/login', user)
}

const logout = async () => {
  try {
    await axios.post('/logout')
    // Handle successful logout on the client-side (e.g., clear cookies, redirect to login)
  } catch (error) {
    console.error('Error logging out:', error)
    // Handle logout error on the client-side (e.g., display an error message)
  }
}

export { loginUser, logout }
