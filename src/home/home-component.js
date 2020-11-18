import './home-style.css';
import { FooterComponent } from '../cards-book/footcards-book-component';

export function HomeComponent() {
  return (
    <div>
      <header className="header">
        <div className="text-header">
          <h1>Encuentra los mejores libros</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, architecto quis. Nihil obcaecati quidem
          omnis sed minus vel reiciendis tempora eum, rem, debitis fugit dolor sit dict a fuga, quisquam adipisci.
          </p>
        </div>
      </header>
      <CardsBookComponent></CardsBookComponent>
    </div>
  )
}
