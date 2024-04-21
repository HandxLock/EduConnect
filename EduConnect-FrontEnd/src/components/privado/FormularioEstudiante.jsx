import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import useMostrarAlertaConfirmacion from '../../hooks/useMostrarAlertaConfirmacion'
import '../../styles/privado/formulario.css'

function FormularioEstudiante () {
  return (
        <>
        <Card className=" formulario">
            <Form onSubmit={useMostrarAlertaConfirmacion}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="string" placeholder="Nombre" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellido Paterno</Form.Label>
                    <Form.Control type="string" placeholder="Apellido Paterno" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellido Materno</Form.Label>
                    <Form.Control type="string" placeholder="APellido Materno" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rut</Form.Label>
                    <Form.Control type="string" placeholder="Rut" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="string" placeholder="Dirección" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Comuna</Form.Label>
                    <Form.Control type="string" placeholder="Comuna" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="string" placeholder="Teléfono" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="string" placeholder="Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Clave</Form.Label>
                    <Form.Control type="string" placeholder="Clave" />
                </Form.Group>
                <Button variant="primary" type="submit" className='m-3'>
                    Ingresar
                </Button>
            </Form>
        </Card>
        </>
  )
}

export default FormularioEstudiante
