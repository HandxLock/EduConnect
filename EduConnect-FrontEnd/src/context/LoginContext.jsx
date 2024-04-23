import { useEffect, useContext, createContext, useState } from 'react'
import { PersonasContext } from './PersonaContext'
import { useNavigate } from 'react-router-dom'

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const { Persona } = useContext(PersonasContext)
  const [loginState, setLoginState] = useState({ nombre: 'anonimo', perfil: 'publico', isLoggedIn: false })
  const navigate = useNavigate()

  const login = () => {
    setLoginState({ nombre: Persona.nombre, perfil: Persona.perfil, isLoggedIn: true })
  }

  useEffect(() => {
    if (Persona) {
      login()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Persona])

  useEffect(() => {
    if (loginState.isLoggedIn) {
      redirect()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginState])

  const redirect = () => {
    if (loginState.perfil === 'Admin') {
      navigate('/Admin')
    }
    if (loginState.perfil === 'Superadmin') {
      navigate('/superAdmin')
    }
    if (loginState.perfil === 'Docente') {
      navigate('/Docente')
    }
    if (loginState.perfil === 'Alumno') {
      navigate('/Alumno')
    }
  }

  return (
    <LoginContext.Provider value={{ loginState, setLoginState }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
