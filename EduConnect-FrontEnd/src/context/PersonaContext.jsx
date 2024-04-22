import { createContext, useState } from 'react'

export const PersonasContext = createContext()

const PersonaProvider = ({ children }) => {
  const [Persona, setPersona] = useState({ nombre: 'anonimo', perfil: 'publico' })

  return (
        <PersonasContext.Provider value={{ Persona, setPersona }}>
            {children}
        </PersonasContext.Provider>
  )
}

export default PersonaProvider
