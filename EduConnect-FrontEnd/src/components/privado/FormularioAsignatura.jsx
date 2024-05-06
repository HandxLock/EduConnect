import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'
import { crearAsignatura } from '../../services/asignaturaService'
function FormularioAsignatura () {
  const { user } = useAuth()
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [mensaje, setMensaje] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await crearAsignatura(nombre, descripcion, user.colegio)
      setMensaje('Asignatura se creoexitosamente.')
    } catch (error) {
      console.error('Error al crear asignatura:', error)
      setMensaje('Error al crear asignatura. Por favor, inténtalo de nuevo.')
    }
  }
  return (
    <>
    <h2 className='text-center mt-3'>Creacion Asigatura</h2>
    <Card className="formulario">
        {mensaje && <div className="mensaje">{mensaje}</div>}
        <Form onSubmit={handleSubmit}>

          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="string" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="string" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" className="m-3">
            Ingresar
          </Button>
        </Form>
      </Card>
    </>
  )
}

export default FormularioAsignatura
