import './navbar-style.css';
import React from 'react';
import { Link } from 'react-router-dom';

export class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showNavbar: false, showSearchInput: false};
  }
  closeNavbar = () => {
    console.log('close navbar');
    this.setState({showNavbar: false});
  }
  showNavbar = () => {
    console.log('show navbar');
    this.setState({showNavbar: true});
  }
  showSearchInput = () => {
    console.log('show searchInput');
    this.setState({showSearchInput: true});
  }
  hideSearchInput = () => {
    console.log('show searchInput');
    this.setState({showSearchInput: false});
  }
  onCancelButton = () => {
    console.log('cancel button was clicked');
    this.hideSearchInput();
    this.closeNavbar();
  }

  render() {
    return (
        <nav className="navbar">
            <div className="menu-icon">
                <span className={this.state.showNavbar ? "fas fa-bars hide" : "fas fa-bars"} onClick={this.showNavbar} />
            </div>
            <img src="../img/librero_logo.svg" alt="" />
            <ul className={this.state.showNavbar ? "nav-items active" : "nav-items"}>
                <li>
                    <Link to="./" onClick={this.closeNavbar}>
                        <span className="fas fa-home" />Home
                    </Link>
                </li>
                <li>
                    <Link to="" onClick={this.closeNavbar}>
                        <span className="fas fa-book" />Libros
                    </Link>
                </li>
                <li>
                    <Link to="" onClick={this.closeNavbar}>
                        <span className="fas fa-clipboard" />Pedidos
                    </Link>
                </li>
                <li>
                    <Link to="./contact" onClick={this.closeNavbar}>
                        <span className="fas fa-address-card" />Contacto</Link>
                </li>
            </ul>
            <div className={this.state.showNavbar || this.state.showSearchInput ? "search-icon hide" : "search-icon"} onClick={this.showSearchInput}>
                <span className="fas fa-search" />
            </div>
            <div className={this.state.showNavbar || this.state.showSearchInput ? "cancel-icon show" : "cancel-icon"} onClick={this.onCancelButton}>
                <span className="fas fa-times" style={this.state.showSearchInput ? {color: "#ff3d00"}: {}}/>
            </div>
            <form action="#" className={this.state.showSearchInput ? "active" : ""}>
                <input type="search" className="search-data" placeholder="Search" required />
                <button type="submit" className="fas fa-search"></button>
            </form>
        </nav>
    );
  }
}
