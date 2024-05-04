import Button from 'react-bootstrap/Button'
import '../../styles/privado/aside.css'
import { useAuth } from '../../context/AuthContext'
const Sidebar = ({ onSidebarClick }) => {
  const { logout, user } = useAuth()
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
            Colegios
          </Button>
          <Button variant="warning" size="lg" onClick={() => handleClick('Botón 1')} >
            Crear Admin
          </Button>
          <Button variant="success" size="lg"onClick={() => handleClick('Botón 2')}>
            Crear Colegio
          </Button>
          <Button variant="primary" size="lg" onClick={() => handleClick('Botón 3')}>
            Asignar Colegio
          </Button>
        </div>
      </div>
      <div className='cerrarSesion'>
        <Button variant="danger" size="lg" onClick={() => logout()}>
            Cerrar Sesion
        </Button>

      </div>
    </aside>
    </>
  )
}

export default Sidebar
