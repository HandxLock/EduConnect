import PropTypes from 'prop-types'

const ObservacionesAlumno = ({ observaciones }) => {
  const observacionesStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    border: '1px solid #dee2e6',
    borderRadius: '4px',
    height: '100%'// Ajuste de altura para igualar el tamaño del cuadro
  }

  const h2Style = {
    fontSize: '20px',
    marginBottom: '10px'
  }

  const liStyle = {
    marginBottom: '5px'
  }

  return (
    <div style={observacionesStyle}>
      <h2 style={h2Style}>Observaciones de Alumnos</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {observaciones.map((observation, index) => (
          <li key={index} style={liStyle}>{observation}</li>
        ))}
      </ul>
    </div>
  )
}

ObservacionesAlumno.propTypes = {
  observaciones: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ObservacionesAlumno
