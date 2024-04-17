import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './views/HomePage'

function App () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </>
  )
}

export default App
