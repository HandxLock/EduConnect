import AsideSuperAdmin from '../components/AsideSuperAdmin'
import FormularioColegio from '../components/FormularioColegio'
import { Container, Col, Row } from 'react-bootstrap'

function PerfilSuperAdminFormulario () {
  return (
    <Container fluid lg={12} className='p-0'>
      <Row>
        <Col xs={3}>
          <AsideSuperAdmin/>
        </Col>
        <Col xs={9}>
          <FormularioColegio />
        </Col>
      </Row>
    </Container>
  )
}

export default PerfilSuperAdminFormulario
