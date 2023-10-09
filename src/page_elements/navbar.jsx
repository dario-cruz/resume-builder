import './navbar.css'

export default function NavBar() {

    return (
        <nav className="Landing-Nav">
            <div className="Nav-Title">
                <a href="#about-me">Resumo!</a>
            </div>
            <div className="Nav-Links">
                <div className="About-Link-Container">
                    <a href="#about-author">About The Dev!</a>
                </div>
                <div className="GitHub-Link-Container">
                    <a href="git-hub">GitHub</a>
                </div>
            </div>
        </nav>
    )
}