import './navbar-style.css';

export function NavbarComponent() {
  return (
    <nav className="navbar">
        <div className="menu-icon">
            <span className="fas fa-bars"></span>
        </div>
        <img src="./librero_logo.svg" alt=""></img>
        <ul className="nav-items">
            <li><a href="#"><span className="fas fa-home"></span>Home</a></li>
            <li><a href="#"><span className="fas fa-book"></span>Libros</a></li>
            <li><a href="#"><span className="fas fa-clipboard"></span>Pedidos</a></li>
            <li><a href="contact/contact.html"><span className="fas fa-address-card"></span>Contacto</a></li>
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
