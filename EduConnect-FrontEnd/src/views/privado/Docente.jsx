import SidebarDocente from '../../components/privado/SidebarDocente.jsx'
import MainSuperAdmin from '../../components/privado/MainSuperAdmin'
import { useState } from 'react'
import HomeDocente from '../../components/privado/HomeDocente.jsx'
import DashboardAdmin from '../../components/privado/DashboardAdmin.jsx'
function Docente () {
  const [contenido, setContenido] = useState(<HomeDocente />)
  const handleSidebarClick = (boton) => {
    switch (boton) {
      case 'Botón 0':
        setContenido(<HomeDocente />)
        break
      case 'Botón 4':
        setContenido(<DashboardAdmin />)
        break
      default:
        setContenido(<HomeDocente />)
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
