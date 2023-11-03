import './landing-page.css'
import NormalText from '../page_elements/normal-text'
import HeaderText from '../page_elements/header-text'

function LandingImage() {
    return (
        <div className='Landing-Image-Container'>
            <img className='Landing-Image' src='../src/images/resume-stock-photo.jpg' alt='Resumo Landing Image'/>
        </div>
    )
}

const headingText = 'Your Resume could use a level up'
const thePitch = 'Resume is the fastest way to create a beautiful CV that will lead to your next opportunity. Lets get started on leveling up your career, you disserve it!'

export default function LandingPage() {

    return (
        <div className="landing">
            <section className='Landing-Section'>
                <div className='Landing-Section-Text'>
                    <div className='Landing-Header-Container'>
                        <HeaderText content={ headingText } elementClass={'Landing-Header'} />
                    </div>
                    <div className="Landing-Text-Container">
                        <NormalText content={ thePitch } elementClass={'Landing-Text'} />
                    </div>
                </div>
                <LandingImage />
            </section>
        </div>
    )
}