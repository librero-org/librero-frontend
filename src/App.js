import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavbarComponent } from './navbar/navbar-component';
import { HomeComponent } from './home/home-component';
import { ContactComponent } from './contact/contact-component';
import { ExampleGQLComponent } from './example-gql/example-gql-component';
import { ScreenErrorComponent } from './screen-error/screen-error-component';
import { FooterComponent } from './footer/footer-component';

function App() {
  return (
    <Router>
      <NavbarComponent></NavbarComponent>
      <div className='container'>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/contact" component={ContactComponent} />
        <Route path="/example-gql" component={ExampleGQLComponent} />
      </div>
      <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;
