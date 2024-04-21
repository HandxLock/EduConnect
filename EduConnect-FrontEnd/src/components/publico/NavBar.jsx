import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/publico/homeStyle.css'
import { IconBook } from '@tabler/icons-react'

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
        <IconBook height className="d-inline-block align-top logo" stroke={2} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-lg-flex justify-content-center align-items-center flex-lg-grow-1">
            <Nav className="mr-auto navbar-color">
              <Nav.Link class href="#beneficios">Beneficios</Nav.Link>
              <Nav.Link href='#contacto'>Contacto</Nav.Link>
            </Nav>
          </div>
          <Link to="/login" className='text-dark'>
          <Button className='btn' variant=""><b className='btLog'>Iniciar sesión</b></Button>
            </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
