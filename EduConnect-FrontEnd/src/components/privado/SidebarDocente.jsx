import Button from 'react-bootstrap/Button'
import '../../styles/privado/aside.css'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
const SidebarDocente = ({ onSidebarClick }) => {
  const { user, logout } = useAuth()
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
          <Button variant="warning" size="lg" onClick={() => handleClick('Botón 1')} >
            Crear observación
          </Button>
          <Button variant="success" size="lg"onClick={() => handleClick('Botón 2')}>
            Crear evaluación
          </Button>
          <Button variant="primary" size="lg" onClick={() => handleClick('Botón 3')}>
            Calificar evaluación
          </Button>
          <Button variant="dark" size="lg" onClick={() => handleClick('Botón 4')}>
            DashBoard
          </Button>
        </div>
      </div>
      <div className='cerrarSesion'>
        <Link to='/' onClick={() => logout()}></Link>
        <Button variant="danger" size="lg">
            Cerrar Sesion
        </Button>

      </div>
    </aside>
    </>
  )
}

export default SidebarDocente
