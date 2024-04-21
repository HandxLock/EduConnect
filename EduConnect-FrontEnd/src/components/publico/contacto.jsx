import '../../styles/publico/contacto.css'
import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const { name, email, message } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container">
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            autoComplete='name'
            placeholder='Ingrese Nombre'
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            autoComplete='email'
            placeholder='Ingrese Email'
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje:</label>
          <textarea
            className="form-control"
            id="message"
            placeholder='Ingrese Mensaje'
            rows="4"
            value={message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>

      <div className="mt-4">
        <h3>Información de Contacto:</h3>
        <p>Dirección: AV Salvador 1110 Providencia, Chile</p>
      </div>
    </div>
  )
}

export default ContactForm
