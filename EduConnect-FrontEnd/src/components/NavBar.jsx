import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/homeStyle.css'

function NavBar () {
  return (
    <Navbar className='bgcolor'expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo.png" // Ruta a tu logo
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
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            </Nav>
          </div>
          <Nav >
            <NavDropdown className='navbar-color' title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#docentes">Docentes</NavDropdown.Item>
              <NavDropdown.Item href="#estudiantes">Estudiantes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
