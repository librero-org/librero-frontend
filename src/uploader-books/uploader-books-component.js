import "./uploader-books-style.css";
// import { functionTagInputFile } from "./functionTagInputFile";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_BOOKS = gql`
  mutation($data: UploadBookInput!) {
    uploadBook(data: $data) {
      id
      title
      authors
      url
      coverUrl
    }
  }
`;

function ExchangeRates() {
    let title, author, file;
    const [mutate, { data, error }] = useMutation(UPLOAD_BOOKS);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Titulo: " + title.value + "\nAutor: " + author.value + '\nFile: ' + file);
        mutate({
            variables: {
                data: {
                    book: { title: title.value, authors: [author.value] },
                    file: file.files[0],
                },
            },
        });
    };

    return (
        <div>
            <div className="form-small-container">
            <form className="form-small" onSubmit={handleSubmit}>
            <h4>Titulo del libro: *</h4>
                <input type="text" name="title" pattern="[A-Za-z]{1,40}" ref={(node) => (title = node)} required/>
                <span className="fas fa-book-open icon_input"></span>
                <h4>Autor(es): *</h4>
                <input type="text" name="author" pattern="[A-Za-z]{1,40}" ref={(node) => (author = node)} required/>
                <span className="fas fa-address-card icon_input"></span>
                <input type="file" name="file" ref={(node) => (file = node)} />
                <button type="submit" className="fas fa-search"> Enviar </button>
            </form>
        </div>
        </div>
    );
}

export function UploaderBooksComponent() {
    return (
        <div>
            <ExchangeRates />
        </div>
    );
}
