import PropTypes from 'prop-types'

const AnotacionesAlumno = ({ anotaciones }) => {
  const anotacionesStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    border: '1px solid #dee2e6',
    borderRadius: '4px',
    height: '100%' // Ajuste de altura para igualar el tamaño del cuadro
  }

  const h2Style = {
    fontSize: '20px',
    marginBottom: '10px'
  }

  const liStyle = {
    marginBottom: '5px'
  }

  return (
    <div style={anotacionesStyle}>
      <h2 style={h2Style}>Anotaciones</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {anotaciones.map((annotation, index) => (
          <li key={index} style={liStyle}>{annotation}</li>
        ))}
      </ul>
    </div>
  )
}

AnotacionesAlumno.propTypes = {
  anotaciones: PropTypes.arrayOf(PropTypes.string).isRequired // Se espera un array de strings
}

export default AnotacionesAlumno
