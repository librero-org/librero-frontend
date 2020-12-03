import { gql, useMutation } from "@apollo/client";
import Swal from 'sweetalert2';

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

    const [mutate, { data, error, loading }] = useMutation(UPLOAD_BOOKS);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            "Titulo: " + title.value + "\nAutor: " + author.value + "\nFile: " + file
        );
        mutate({
            variables: {
                data: {
                    book: { title: title.value, authors: [author.value] },
                    file: file.files[0],
                },
            },
        });
    };

    if (error) {
        Swal.fire({
            title: 'Oops...',
            text: 'Algo salio mal!',
            icon: 'error',
            showConfirmButton: false,
            timer: 2000
        })
    }

    if (loading) {
        Swal.fire('Por favor espere')
        Swal.showLoading()
    }

    if (data) {
        Swal.fire({
            title: 'Archivo subido correctamente',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
        })
    }

    return (
        <div>
            <div className="title">
                <h1>Comparte un libro</h1>
                <hr id="hr1" />
                <hr id="hr2" />
            </div>
            <p>
                La mejor forma de hace crecer la comunidad, es compartir un libro, no lo
                dudes!.
      </p>
            <br />
            <div className="form-small-container">
                <form className="form-small" onSubmit={handleSubmit}>
                    <p>Por favor, llena los campos requeridos.</p>
                    <h4>Titulo del libro: *</h4>
                    <span className="fas fa-book-open icon_input" />
                    <input type="text" name="title" ref={(node) => (title = node)} required />
                    <h4>Autor(es): *</h4>
                    <span className="fas fa-address-card icon_input"></span>
                    <input
                        type="text" name="author" ref={(node) => (author = node)} required
                        accept="
                        application/epub+zip,
                        application/pdf,
                        application/rtf,
                        application/vnd.amazon.ebook,
                        application/msword
                        "
                    />
                    <h4>Busca tu archivo: *</h4>
                    <input
                        type="file" name="file" ref={(node) => (file = node)} required />
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
