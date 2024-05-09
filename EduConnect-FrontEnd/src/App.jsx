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
import Contacto from './views/publico/Contacto.jsx'
import Docente from './views/privado/Docente.jsx'
import ProtectedRouteDocente from './ProtectedRouteDocente.jsx'
import ProtectedRouteAlumno from './ProtectedRoutesAlumno.jsx'
function App () {
  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/contacto' element={ <Contacto />}/>
        <Route element ={ <ProtectedRouteSuperAdmin/> }>
          <Route path='/superadmin' element={ <SuperAdmin />}/>
        </Route>
        <Route element ={ <ProtectedRouteAdmin/> }>
          <Route path='/admin' element={ <Admin />}/>
        </Route>
        <Route element= {<ProtectedRouteDocente/>}>
          <Route path='/docente' element={ <Docente />}/>
        </Route>
        <Route element ={<ProtectedRouteAlumno/>}>
          <Route path='/alumno' element={ <Alumno />}/>
        </Route>
        <Route path='*' element={< PaginaError />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
