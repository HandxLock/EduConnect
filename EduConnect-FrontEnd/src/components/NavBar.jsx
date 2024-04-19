import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/homeStyle.css'

function NavBar () {
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
              <NavDropdown.Item className='navbar-color' as={Link} to="/login">Login <img src="https://cdn.hugeicons.com/icons/login-03-stroke-rounded.svg" alt="login-03" width="24" height="24" /></NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
