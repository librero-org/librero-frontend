import { useQuery, gql } from "@apollo/client";
import { CardBookComponent } from "../cards-book/card-book-component";

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

export function BooksComponent() {
  return (
    <div>
      <div className="title">
      <h1>Encuentra los mejores libros aquí</h1>
      <hr id="hr1"/>
      <hr id="hr2"/>
      </div>
      <ExchangeRates />
    </div>
  );
}
