import AsideSuperAdmin from '../../components/privado/AsideSuperAdmin'
import FormularioColegio from '../../components/privado/FormularioColegio'
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
