import AsideAdmin from '../../components/privado/Admin/AsideAdmin'
import FormularioEstudiante from '../../components/privado/Estudiante/FormularioEstudiante'
import { Container, Col, Row } from 'react-bootstrap'

function PerfilAdminFormularioEstudiante () {
  return (
    <Container fluid lg={12} className='p-0'>
      <Row>
        <Col xs={3}>
          <AsideAdmin/>
        </Col>
        <Col xs={9}>
          <FormularioEstudiante/>
        </Col>
      </Row>
    </Container>
  )
}

export default PerfilAdminFormularioEstudiante
