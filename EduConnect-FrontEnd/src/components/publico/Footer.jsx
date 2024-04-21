function Footer () {
  return (
    <footer className="container footer">
      <div className="footer-links">
        <a href="#" className="footer-link">Aviso legal</a>
        <span className="footer-separator"> | </span>
        <a href="#" className="footer-link">Protección de datos</a>
        <span className="footer-separator"> | </span>
        <a href="#" className="footer-link">Política de cookies</a>
        <span className="footer-separator"> | </span>
        <a href="#" className="footer-link">Política de calidad</a>
      </div>
      <div className="footer-info">
        <p className="footer-copyright">Copyright 2024 EduConnect Ltda | Todos los derechos reservados</p>
        <p className="footer-developer">Desarrollado por <a href="https://github.com/HandxLock/EduConnect" className="footer-link">EduConnect</a></p>
      </div>
    </footer>
  )
}

export default Footer
