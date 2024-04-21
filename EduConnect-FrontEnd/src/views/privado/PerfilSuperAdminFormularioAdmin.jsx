import AsideSuperAdmin from '../../components/privado/AsideSuperAdmin'
import FormularioAdmin from '../../components/privado/FormularioAdmin'
import { Container, Col, Row } from 'react-bootstrap'

function PerfilSuperAdminFormularioAdmin () {
  return (
    <Container fluid lg={12} className='p-0'>
      <Row>
        <Col xs={3}>
          <AsideSuperAdmin/>
        </Col>
        <Col xs={9}>
          <FormularioAdmin />
        </Col>
      </Row>
    </Container>
  )
}

export default PerfilSuperAdminFormularioAdmin
