import Beneficio from '../../components/publico/Beneficio'
import Carousel from 'react-bootstrap/Carousel'
import LineaPunteada from '../../components/publico/LineaPunteada'
import ContactForm from '../../components/publico/contacto'
import Footer from '../../components/publico/Footer'
import '../../styles/publico/footer.css'
import '../../styles/publico/homeStyle.css'
import '../../styles/publico/contacto.css'
import Graduacion from '../../assets/img/Graduacion.jpg'
import Biblioteca from '../../assets/img/Biblioteca.jpg'
import Libros from '../../assets/img/Libros.jpg'

function HomePage () {
  return (
    <div>
      {/* Carrusel */}
      <Carousel className='shadow-lg carrusel'>
        <Carousel.Item interval={1000}>
          <img className='bg-blur img-fluid' src={Graduacion} alt="First slide" />
          <Carousel.Caption>
            <h3>Registro Educativo</h3>
            <p>Guardando el camino hacia un futuro brillante.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className='bg-blur img-fluid' src={Biblioteca} alt="Second slide" />
          <Carousel.Caption>
            <h3>Archivos Académicos</h3>
            <p>Construyendo un Puente entre el Ayer y el Mañana de cada Estudiante.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='bg-blur img-fluid' src={Libros} alt="Third slide" />
          <Carousel.Caption>
            <h3>Guardando Huellas del Conocimiento</h3>
            <p>Un Registro Digital para el Éxito Educativo.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Separador y Beneficio */}
      <div className='d-flex mt-4 ' id="beneficios">
        <LineaPunteada />
      </div>
      <div>
        <Beneficio />
      </div>

      {/* Separador y Formulario de contacto */}
      <div className='d-flex mt-4' id='contacto'>
        <LineaPunteada />
      </div>
      <div className="container d-flex justify-content-center ">
        <div className='formulario'>
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
