import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import { useContext } from 'react'
// import PerfilSuperAdminFormulario from './views/privado/PerfilSuperAdminFormulario.jsx'
// import PerfilSuperAdminHome from './views/privado/PerfilSuperAdminHome.jsx'
// import PerfilSuperAdminFormularioAdmin from './views/privado/PerfilSuperAdminFormularioAdmin.jsx'
// import PerfilAdminFormularioProfesor from './views/privado/PerfilAdminFormularioProfesor.jsx'
// import PerfilAdminFormularioEstudiante from './views/privado/PerfilAdminFormularioEstudiante.jsx'
import HomePage from './views/publico/HomePage.jsx'
import Login from './views/publico/login.jsx'
import Alumno from './views/privado/PerfilAlumno.jsx'
import ProtectedRouteAdmin from './ProtectedRouteAdmin.jsx'
import ProtectedRouteSuperAdmin from './ProtectedRouteSuperAdmin.jsx'
import PaginaError from './views/publico/paginaError.jsx'
import SuperAdmin from './views/privado/SuperAdmin.jsx'
import Admin from './views/privado/Admin.jsx'
function App () {
  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />} />
          <Route element ={ <ProtectedRouteSuperAdmin/> }>
            <Route path='/superadmin' element={ <SuperAdmin />}/>
            <Route path='*' element={< PaginaError />}/>
        </Route>
        <Route element ={ <ProtectedRouteAdmin/> }>
          <Route path='/admin' element={ <Admin />}/>
          <Route path='*' element={< PaginaError />}/>
        </Route>
        <Route path='*' element={< PaginaError />}/>
        <Route path='/alumno' element={ <Alumno />}/>
          {/* <Route path='/superadmin/formulariocolegio' element={ Persona.perfil === 'Superadmin' ? <PerfilSuperAdminFormulario/> : <Navigate to ='/login' replace />}/>
        <Route path='/superadmin/formularioadmin' element={ Persona.perfil === 'Superadmin' ? <PerfilSuperAdminFormularioAdmin/> : <Navigate to ='/login' replace />}/>
        <Route path='/admin' element={ Persona.perfil === 'Admin' ? <PerfilAdminHome/> : <Navigate to ='/login' replace />}/>
        <Route path='/admin/formularioprofesor' element={ Persona.perfil === 'Admin' ? <PerfilAdminFormularioProfesor/> : <Navigate to ='/login' replace />}/>
        <Route path='/admin/formularioestudiante' element={ Persona.perfil === 'Admin' ? <PerfilAdminFormularioEstudiante/> : <Navigate to ='/login' replace />}/>
        <Route path='/alumno' element={ Persona.perfil === 'Alumno' ? <Alumno/> : <Navigate to ='/login' replace />}></Route> */}

      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
