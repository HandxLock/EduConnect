import { Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import PerfilSuperAdminFormulario from './views/privado/PerfilSuperAdminFormulario.jsx'
import PerfilSuperAdminHome from './views/privado/PerfilSuperAdminHome.jsx'
import PerfilSuperAdminFormularioAdmin from './views/privado/PerfilSuperAdminFormularioAdmin.jsx'
import PerfilAdminFormularioProfesor from './views/privado/PerfilAdminFormularioProfesor.jsx'
import PerfilAdminHome from './views/privado/PerfilAdminHome.jsx'
import PerfilAdminFormularioEstudiante from './views/privado/PerfilAdminFormularioEstudiante.jsx'
import HomePage from './views/publico/HomePage.jsx'
import { PersonasContext } from './context/PersonaContext.jsx'
import Login from './views/publico/login.jsx'
import Alumno from './views/privado/PerfilAlumno.jsx'

function App () {
  const { Persona } = useContext(PersonasContext)
  console.log('context: ', Persona)
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/superadmin' element={ Persona.perfil === 'Superadmin' ? <PerfilSuperAdminHome/> : <Navigate to ='/login' replace />}/>
        <Route path='/superadmin/formulariocolegio' element={ Persona.perfil === 'Superadmin' ? <PerfilSuperAdminFormulario/> : <Navigate to ='/login' replace />}/>
        <Route path='/superadmin/formularioadmin' element={ Persona.perfil === 'Superadmin' ? <PerfilSuperAdminFormularioAdmin/> : <Navigate to ='/login' replace />}/>
        <Route path='/admin' element={ Persona.perfil === 'Admin' ? <PerfilAdminHome/> : <Navigate to ='/login' replace />}/>
        <Route path='/admin/formularioprofesor' element={ Persona.perfil === 'Admin' ? <PerfilAdminFormularioProfesor/> : <Navigate to ='/login' replace />}/>
        <Route path='/admin/formularioestudiante' element={ Persona.perfil === 'Admin' ? <PerfilAdminFormularioEstudiante/> : <Navigate to ='/login' replace />}/>
        <Route path='/alumno' element={ Persona.perfil === 'Alumno' ? <Alumno/> : <Navigate to ='/login' replace />}></Route>
      </Routes>
    </>
  )
}

export default App
