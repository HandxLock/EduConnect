/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from 'react'
import { loginUser, verificarTokenRequest } from '../../api/auth'
import Cookies from 'js-cookie'

const AuthContext = createContext()

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe ser usado con un provider')
  }
  return context
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(true)

  const logeo = async ({ email, password }) => {
    try {
      const res = await loginUser(email, password)

      setAuthenticated(true)
      setUser(res.data)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      console.log(error.response.data)
      setErrors([error.response.data.error])
    }
  }
  useEffect(() => {
    async function checkLogin () {
      const cookies = Cookies.get()

      if (!cookies.token) {
        setAuthenticated(false)
        setUser('')
      }
      try {
        const res = await verificarTokenRequest(cookies.token)
        if (!res.data) {
          setAuthenticated(false)
          setLoading(false)
          return
        }
        setAuthenticated(true)
        console.log(res.data)
        setUser(res.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setAuthenticated(false)
        setUser(null)
        setLoading(false)
      }
    }
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      errors,
      logeo,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthContext, AuthProvider, useAuth }
