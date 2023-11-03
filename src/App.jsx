import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import FormPage from './pages/form-page'
import NavBar from './page_elements/navbar'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LandingPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
