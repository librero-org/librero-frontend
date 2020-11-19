import './navbar-style.css';
import { Link } from 'react-router-dom';
import { searchButton, cancelButton, menuButton } from './functionButton';

export function NavbarComponent() {
    return (
        <nav className="navbar">
            <div id="menu-icono" className="menu-icon" onClick={menuButton}>
                <span className="fas fa-bars"></span>
            </div>
            <img src="../img/librero_logo.svg" alt="" />
            <ul className="nav-items">
                <li><Link to="./"><span className="fas fa-home"></span>Home</Link></li>
                <li><Link to=""><span className="fas fa-book"></span>Libros</Link></li>
                <li><Link to=""><span className="fas fa-clipboard"></span>Pedidos</Link></li>
                <li><Link to="./contact"><span className="fas fa-address-card"></span>Contacto</Link></li>
            </ul>
            <div className="search-icon" onClick={searchButton}>
                <span className="fas fa-search"></span>
            </div>
            <div className="cancel-icon" onClick={cancelButton}>
                <span className="fas fa-times"></span>
            </div>
            <form action="#">
                <input type="search" className="search-data" placeholder="Search" required></input>
                <button type="submit" className="fas fa-search"></button>
            </form>
        </nav>
    );
}
