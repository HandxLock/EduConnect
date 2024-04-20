import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import '../styles/formulario.css'
function FormularioColegio () {
  return (
        <>
        <Card className=" formulario p-4">
            <Form>
                <Form.Group controlId="formGridEmail">
                <Form.Label>Nombre Establecimiento</Form.Label>
                <Form.Control type="string" placeholder="Establecimiento" />
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="string" placeholder="Dirección" />
                </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="string" placeholder="Teléfono" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
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
