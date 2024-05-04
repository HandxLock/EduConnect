import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import '../../styles/privado/formulario.css'
import { asignarColegio, getAdmins, getColegios } from '../../../api/auth.js'
import { useEffect, useState } from 'react'

function AsignacionColegio () {
  const [colegios, setColegios] = useState([]) // Estado para almacenar los colegios
  const [administradores, setAdministradores] = useState([])
  const [selectedColegio, setSelectedColegio] = useState('') // Estado para almacenar el colegio seleccionado
  const [selectedAdmin, setSelectedAdmin] = useState('') // Estado para almacenar el admin seleccionado
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Función asincrónica para obtener los colegios y administradores al cargar el componente
    const fetchData = async () => {
      try {
        const colegiosData = await getColegios()
        const adminsData = await getAdmins()
        setColegios(colegiosData)
        setAdministradores(adminsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData() // Llamada a la función para obtener los datos al cargar el componente
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Aquí debes enviar los IDs de colegio y administrador seleccionados al backend
      await asignarColegio(selectedAdmin, selectedColegio)
      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
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
            <Form.Label>Colegio</Form.Label>
            <Form.Control as="select" value={selectedColegio} onChange={(e) => setSelectedColegio(e.target.value)}>
              <option value="">Selecciona un colegio</option>
              {colegios.map((colegio) => (
                <option key={colegio.colegio_id} value={colegio.colegio_id}>{colegio.nombre}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Administrador</Form.Label>
            <Form.Control as="select" value={selectedAdmin} onChange={(e) => setSelectedAdmin(e.target.value)}>
              <option value="">Selecciona un administrador</option>
              {administradores.map((administrador) => (
                <option key={administrador.usuario_id} value={administrador.usuario_id}>{administrador.nombre}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </Card>
    </>
  )
}

export default AsignacionColegio
