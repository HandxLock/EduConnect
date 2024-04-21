import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import useMostrarAlertaConfirmacion from '../../hooks/useMostrarAlertaConfirmacion'
import '../../styles/privado/formulario.css'
function FormularioColegio () {
  return (
        <>
        <Card className=" formulario">
            <Form onSubmit={useMostrarAlertaConfirmacion}>
                <Form.Group>
                    <Form.Label>Nombre Establecimiento</Form.Label>
                    <Form.Control type="string" placeholder="Establecimiento" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="string" placeholder="Dirección" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="string" placeholder="Teléfono" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Comuna</Form.Label>
                    <Form.Control type="string" placeholder="Comuna" />
                </Form.Group>
                 <Button variant="primary" type="submit">
                     Ingresar
                </Button>
            </Form>
        </Card>
        </>
  )
}

export default FormularioColegio
