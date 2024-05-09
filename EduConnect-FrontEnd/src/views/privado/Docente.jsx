import SidebarDocente from '../../components/privado/SidebarDocente.jsx'
import MainSuperAdmin from '../../components/privado/MainSuperAdmin'
import { useState } from 'react'
import HomeDocente from '../../components/privado/HomeDocente.jsx'
import DashboardSuperAdmin from '../../components/privado/DashboardSuperAdmin'
function Docente () {
  const [contenido, setContenido] = useState(<HomeDocente />)
  const handleSidebarClick = (boton) => {
    switch (boton) {
      case 'Botón 0':
        window.location.reload()// Esto recargará la página
        break
      case 'Botón 4':
        setContenido(<DashboardSuperAdmin />)
        break
      default:
        setContenido(null)
    }
  }

  return (
    <>
    <div className='d-flex'>
      <SidebarDocente onSidebarClick={handleSidebarClick} />
      <MainSuperAdmin contenido={contenido} />
    </div>
    </>
  )
}

export default Docente
