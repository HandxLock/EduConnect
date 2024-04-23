import { useEffect, useContext, createContext, useState } from 'react'
import { PersonasContext } from './PersonaContext'
import { useNavigate } from 'react-router-dom'

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const { Persona } = useContext(PersonasContext)
  const [LoginState, setLoginState] = useState({ nombre: 'anonimo', perfil: 'publico', isLoggedIn: false })
  const navigate = useNavigate()
  const login = () => {
    setLoginState({ nombre: Persona.nombre, perfil: Persona.perfil, isLoggedIn: true })
    console.log('login state', LoginState)
    const redirect = () => {
      console.log('persona', LoginState)
      if (LoginState.perfil === 'Admin') {
        navigate('/Admin')
      }
      if (LoginState.perfil === 'Superadmin') {
        navigate('/superAdmin')
      }
      if (LoginState.perfil === 'Docente') {
        navigate('/Admin')
      }
      if (LoginState.perfil === 'Alumno') {
        navigate('/Admin')
      }
    }
    redirect()
  }

  useEffect(() => {
    login()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Persona])

  return (
        <LoginContext.Provider value={{ LoginState, setLoginState }}>
            {children}
        </LoginContext.Provider>
  )
}

export default LoginProvider
