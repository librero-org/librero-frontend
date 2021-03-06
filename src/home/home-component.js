import "./home-style.css";
import "../cards-book/cards-book-style.css";
import { useQuery, gql } from "@apollo/client";
import { CardBookComponent } from "../cards-book/card-book-component";
import { Link } from 'react-router-dom';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      authors
      url
      coverUrl
    }
  }
`;

function ExchangeRates() {
  const { loading, data, error } = useQuery(GET_BOOKS);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  if (data) {
    const a = Array.from(data.books)
      .sort((a, b) => {
        if (a.title === b.title) return 0;
        if (a.title < b.title) return -1;
        return 1;
      })
      .map((book) => <CardBookComponent book={book} key={book.id} />);
    return <div className="main-cards">{a}</div>;
  }
}

export function HomeComponent() {
  return (
    <div>
      <header className="header">
        <div className="text-header">
          <h1>Encuentra los mejores libros</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
            architecto quis. Nihil obcaecati quidem omnis sed minus vel
            reiciendis tempora eum, rem, debitis fugit dolor sit dict a fuga,
            quisquam adipisci.
          </p>
        </div>
      </header>
      <ExchangeRates />
      <Link to="./books">
        <button type="submit" className="fas fa-angle-double-right"> Ver más</button>
      </Link>
    </div>
  );
}
