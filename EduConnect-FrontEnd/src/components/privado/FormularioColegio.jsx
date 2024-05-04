import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
// import useMostrarAlertaConfirmacion from '../../hooks/useMostrarAlertaConfirmacion'
import '../../styles/privado/formulario.css'
import { agregarColegio } from '../../../api/auth.js'
import { useState } from 'react'
function FormularioColegio () {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [rut, setRut] = useState('')
  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await agregarColegio(nombre, descripcion, rut, telefono, email)
      // Marca el formulario como enviado
      setSubmitted(true)
    } catch (error) {
      console.error('Error al agregar colegio:', error)
      // Aquí puedes manejar el error, mostrar una alerta, etc.
    }
  }
  if (submitted) {
    window.location.href = '/superadmin'
  }
  return (
        <>
        <Card className="formulario">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre Establecimiento</Form.Label>
            <Form.Control type="string" placeholder="Establecimiento" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="string" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>RUT</Form.Label>
            <Form.Control type="string" placeholder="RUT" value={rut} onChange={(e) => setRut(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="string" placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="string" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="string" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
