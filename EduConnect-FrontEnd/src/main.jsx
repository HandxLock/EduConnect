import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import PersonaProvider from './context/PersonaContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PersonaProvider>
        <App />
      </PersonaProvider>
    </BrowserRouter>
  </React.StrictMode>
)
