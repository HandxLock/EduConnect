import { Col, Container, Row } from 'react-bootstrap'
import '../../styles/privado/aside.css'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Image from 'react-bootstrap/Image'

function AsideSuperAdmin () {
  return (
        <>
            <div className="aside">
                <div className='perfil'>
                    <Image src="https://es.seaicons.com/wp-content/uploads/2015/06/user-male-icon.png" roundedCircle />
                    <h3>SuperAdmin</h3>
                    <p>Profile</p>
                </div>
                <Container fluid>
                    <Row>
                        <Col md={{ span: 6, offset: 4 }} >
                            <DropdownButton id="dropdown-basic-button" title="Selecciona" drop={'down-centered'} >
                                <Dropdown.Item href='/superAdmin/formularioColegio'>Colegio</Dropdown.Item>
                                <Dropdown.Item href="/superAdmin/formularioAdmin">Administrador</Dropdown.Item>
                                <Dropdown.Item href="#/superAdmin/asignarColegio">Asignar Colegio</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
  )
}
export default AsideSuperAdmin
