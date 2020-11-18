import './App.css';
import { FooterComponent } from './footer/footer-component';
import { HomeComponent } from './home/home-component';
import { NavbarComponent } from './navbar/navbar-component';

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div className='container'>
        <HomeComponent></HomeComponent>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
