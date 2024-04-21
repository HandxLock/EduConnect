import AsideAdmin from '../components/AsideAdmin'
import FormularioProfesor from '../components/FormularioProfesor'
import { Container, Col, Row } from 'react-bootstrap'

function PerfilAdminFormularioProfesor () {
  return (
    <Container fluid lg={12} className='p-0'>
      <Row>
        <Col xs={3}>
          <AsideAdmin/>
        </Col>
        <Col xs={9}>
          <FormularioProfesor/>
        </Col>
      </Row>
    </Container>
  )
}

export default PerfilAdminFormularioProfesor
