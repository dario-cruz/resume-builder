import './App.css'
import Landing from './pages/landing-page'
import NavBar from './page_elements/navbar'
import FormPage from './pages/form-page'

function App() {

  return (
    <>
      <NavBar />
      <div className='Main-Content'>
        <Landing />
        <FormPage />
      </div>
    </>
  )
}

export default App
