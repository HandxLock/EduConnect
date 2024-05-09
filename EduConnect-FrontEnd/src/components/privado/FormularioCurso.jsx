import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { crearCurso } from '../../services/cursoService'
import { useAuth } from '../../context/AuthContext'
function FormularioCurso () {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [mensaje, setMensaje] = useState('')
  const { user } = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await crearCurso(nombre, descripcion, user.colegio_id)
      setMensaje('Curso creado exitosamente.')
    } catch (error) {
      console.error('Error al agregar curso:', error)
      setMensaje('Error al crear Curso. Por favor, inténtalo de nuevo.')
    }
  }
  return (
    <>
    <h2 className='text-center mt-3'>Creacion Curso</h2>
        <Card className="formulario">
          {mensaje && <div className="mensaje">{mensaje}</div>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre Curso</Form.Label>
            <Form.Control type="string" placeholder="Nombre Curso" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="string" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          </Form.Group>
          <Button className='m-3' variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </Card>
      </>
  )
}

export default FormularioCurso
