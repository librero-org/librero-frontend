import './navbar-style.css';
import { Link } from 'react-router-dom';

export function NavbarComponent() {
    return (
        <nav className="navbar">
            <div className="menu-icon">
                <span className="fas fa-bars"></span>
            </div>
            <img src="../img/librero_logo.svg" alt="" />
            <ul className="nav-items">
                <li><Link to="./"><span className="fas fa-home"></span>Home</Link></li>
                <li><Link to=""><span className="fas fa-book"></span>Libros</Link></li>
                <li><Link to=""><span className="fas fa-clipboard"></span>Pedidos</Link></li>
                <li><Link to="./contact"><span className="fas fa-address-card"></span>Contacto</Link></li>
            </ul>
            <div className="search-icon">
                <span className="fas fa-search"></span>
            </div>
            <div className="cancel-icon">
                <span className="fas fa-times"></span>
            </div>
            <form action="#">
                <input type="search" className="search-data" placeholder="Search" required></input>
                <button type="submit" className="fas fa-search"></button>
            </form>
        </nav>
    );
}
