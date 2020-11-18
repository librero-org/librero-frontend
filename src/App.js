import './App.css';
import {FooterComponent} from './footer/footer-component';
import {HeaderComponent} from './header/header-component';
import {NavbarComponent} from './navbar/navbar-component';

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div className='container'>
        <HeaderComponent></HeaderComponent>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
