import './App.css'
import ResumeForm from './form'
import Landing from './pages/landing'
import NavBar from './page_elements/navbar'

function App() {

  return (
    <>
      <NavBar />
      <div className='Main-Content'>
        <Landing />
        {/* <ResumeForm /> */}
      </div>
    </>
  )
}

export default App
