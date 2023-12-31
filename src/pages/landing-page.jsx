import './landing-page.css'
import NormalText from '../page_elements/normal-text'
import HeaderText from '../page_elements/header-text'
import NavBar from '../page_elements/navbar'

function LandingImage() {
    return (
        <div className='Landing-Image-Container'>
            <img className='Landing-Image' src='../src/images/landing-illustration.svg' alt='Resumo Landing Image'/>
        </div>
    )
}


export default function LandingPage() {

    return (
        <section className='Landing-Section'>
            <div className='Landing-Section-Text'>
                <div className='Landing-Header-Container'>
                    <HeaderText content={'Resumo'} elementClass={'Landing-Header'} />
                </div>
                <div className="Landing-Text-Container">
                    <NormalText content={
                    'The Premier Way to Build Out Your Resume and Stand Out to Employers!'
                    } elementClass={'Landing-Text'} />
                </div>
            </div>
            <LandingImage />
        </section>
    )
}