import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useAuth } from '../../context/AuthContext'
import { NavLink } from 'react-router-dom'

function AsideSuperAdmin () {
  const { user } = useAuth()

  return (
    <div className="aside">
      <div className='perfil'>
        <Image src="https://es.seaicons.com/wp-content/uploads/2015/06/user-male-icon.png" roundedCircle />
        <h3>{user.email}</h3>
        <p>Profile</p>
      </div>
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <NavLink to="/superadmin/formularioAdmin" className="nav-link" activeClassName="active">
              Crear Admin
            </NavLink>
            <NavLink to="/superadmin/formularioColegio" className="nav-link" activeClassName="active">
              Crear Colegios
            </NavLink>
            <NavLink to="/superadmin/formularioAsignarColegio" className="nav-link" activeClassName="active">
              Asignar Colegio
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AsideSuperAdmin
