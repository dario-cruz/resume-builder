import './landing.css'
import NormalText from '../src/page_elements/normal-text'
import HeaderText from '../src/page_elements/header-text'

function LandingImage() {
    return (
        <div className='Landing-Image-Container'>
            <img className='Landing-Image' src='../src/images/landing-illustration.svg' alt='Resumo Landing Image'/>
        </div>
    )
}


export default function Landing() {

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