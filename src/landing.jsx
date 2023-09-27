import './landing.css'
import NormalText from './page_elements/normal-text'
import HeaderText from './page_elements/header-text'

export default function landing() {

    return (
        <section>
            <div>
                <HeaderText content={'Resumo'} elementClass={'header-text'} />
                <NormalText content={
                    'The Premier Way to Build Out Your Resume and Stand Out to Employers!'
                } />
            </div>
        </section>
    )
}