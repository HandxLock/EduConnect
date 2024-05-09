import Button from 'react-bootstrap/Button'
import '../../styles/privado/aside.css'
import { useAuth } from '../../context/AuthContext'
const SidebarDocente = ({ onSidebarClick }) => {
  const { user, logoutContext } = useAuth()
  const handleClick = (boton) => {
    onSidebarClick(boton)
  }
  return (
    <>
    <aside className='aside'>
      <div className='contenedor'>
        <div className='perfil'>
          <h4>Bienvenido {user.nombre}</h4>
        </div>
        <div className='botones'>
          <Button variant="secondary" size="lg" onClick={() => handleClick('Botón 0')} >
            Cursos
          </Button>
          <Button variant="dark" size="lg" onClick={() => handleClick('Botón 4')}>
            DashBoard
          </Button>
        </div>
      </div>
      <div className='cerrarSesion'>
        <Button onClick={() => logoutContext()} variant="danger" size="lg">
            Cerrar Sesion
        </Button>
      </div>
    </aside>
    </>
  )
}

export default SidebarDocente
