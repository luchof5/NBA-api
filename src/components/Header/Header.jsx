import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <img src="logo-NBA.webp" alt="logo-nba" />
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/teams">Equipos</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header