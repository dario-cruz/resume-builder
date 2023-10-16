import './App.css'
import LandingPage from './pages/landing-page'
import NavBar from './page_elements/navbar'
import FormPage from './pages/form-page'

function App() {

  return (
    <>
      <NavBar />
      <div className='Main-Content'>
        <LandingPage />
        <FormPage />
      </div>
    </>
  )
}

export default App
