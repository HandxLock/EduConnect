import AlertIngresoDatos from '../components/AlertIngresoDatos'
import AsideSuperAdmin from '../components/AsideSuperAdmin'
import FormularioAdmin from '../components/FormularioAdmin'
import { Container, Col, Row } from 'react-bootstrap'

function PerfilSuperAdminFormularioAdmin () {
  return (
    <Container fluid lg={12} className='p-0'>
      <Row>
        <Col xs={3}>
          <AsideSuperAdmin/>
        </Col>
        <Col xs={6}>
          <FormularioAdmin />
        </Col>
        <Col xs={3}>
          <AlertIngresoDatos/>
        </Col>
      </Row>
    </Container>
  )
}

export default PerfilSuperAdminFormularioAdmin
