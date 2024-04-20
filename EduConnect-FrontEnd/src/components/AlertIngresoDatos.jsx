import Alert from 'react-bootstrap/Alert'

function AlertIngresoDatos () {
  return (
    <>
      {[
        'info'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  )
}

export default AlertIngresoDatos
