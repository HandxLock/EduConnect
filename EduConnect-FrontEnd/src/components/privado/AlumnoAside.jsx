import { Col, Container, Row } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Image from 'react-bootstrap/Image'
import '../../styles/privado/aside.css'

function AsideAlumno() {
  return (
    <div className="aside ">
      <div className='perfil'>
        <Image src="https://cdn-icons-png.flaticon.com/512/67/67902.png" roundedCircle className='imgperfil' style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
        <h3>Estudiante</h3>
        <p>Profile</p>
      </div>
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className='boton-seleccion'>
              <DropdownButton id="dropdown-basic-button" title="Selecciona" drop={'down-centered'}>
                <Dropdown.Item href='/superAdmin/alumno:id/alumnoNotas'>Notas</Dropdown.Item>
                <Dropdown.Item href="/superAdmin/alumno:id/alumnoObservaciones">Observaciones</Dropdown.Item>
                <Dropdown.Item href="/superAdmin/alumno:id/alumnoAnotaciones">Anotaciones</Dropdown.Item>
              </DropdownButton>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AsideAlumno;
