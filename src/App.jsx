import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import FormPage from './pages/form-page'
import NavBar from './page_elements/navbar'

function App() {

  return (
      <div className='Main-Content'>
        <NavBar/>
        <LandingPage/>
        <FormPage/>
      </div>
  )
}

export default App
