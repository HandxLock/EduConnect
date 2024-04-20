import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { IconLogin2 } from '@tabler/icons-react'
import '../../styles/publico/homeStyle.css'

function NavBar () {
  const location = useLocation()

  const isLoginPage = location.pathname === '/login'

  if (isLoginPage) {
    return null
  }

  return (
    <Navbar className='bgcolor' expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo.png"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-lg-flex justify-content-center align-items-center flex-lg-grow-1">
            <Nav className="mr-auto navbar-color">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link href="#beneficios">Beneficios</Nav.Link>
              <Nav.Link href='#contacto'>Contacto</Nav.Link>
            </Nav>
          </div>
          <Nav>
            <NavDropdown.Item className='navbar-color' as={Link} to="/login">Login <IconLogin2 stroke={2} /></NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
