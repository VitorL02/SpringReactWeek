
import logo from '../../assets/img/logo.svg';
import './header-style.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/vitor_lucas3/"> @vitorlucas_3 </a>
                    Com Ajuda da semana SpringReact do canal DevSuperior
                </p>
            </div>
        </header>
    );
}

export default Header