import './navbar-style.css';
import { Link } from 'react-router-dom';
import { searchButton, cancelButton, menuButton, closeNavBar } from './functionButton';

export function NavbarComponent() {
    return (
        <nav className="navbar">
            <div id="menu-icono" className="menu-icon" onClick={menuButton}>
                <span className="fas fa-bars" />
            </div>
            <img src="../img/librero_logo.svg" alt="" />
            <ul className="nav-items">
                <li>
                    <Link to="./" onClick={closeNavBar}>
                        <span className="fas fa-home" />Home
                    </Link>
                </li>
                <li>
                    <Link to="" onClick={closeNavBar}>
                        <span className="fas fa-book" />Libros
                    </Link>
                </li>
                <li>
                    <Link to="" onClick={closeNavBar}>
                        <span className="fas fa-clipboard" />Pedidos
                    </Link>
                </li>
                <li>
                    <Link to="./contact" onClick={closeNavBar}>
                        <span className="fas fa-address-card" />Contacto</Link>
                </li>
            </ul>
            <div className="search-icon" onClick={searchButton}>
                <span className="fas fa-search" />
            </div>
            <div className="cancel-icon" onClick={cancelButton}>
                <span className="fas fa-times" />
            </div>
            <form action="#">
                <input type="search" className="search-data" placeholder="Search" required />
                <button type="submit" className="fas fa-search"></button>
            </form>
        </nav>
    );
}
