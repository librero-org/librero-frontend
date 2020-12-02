import './uploader-books-style.css';
import { functionTagInputFile, hola } from './functionTagInputFile';

export function UploaderBooksComponent() {
    return (
        <div>
            <div className="form-small-container">
                <form className="form-small">
                    <h4>Titulo del libro: *</h4>
                    <input type="text" name="book-title" pattern="[A-Za-z]{1,40}" title="Solo letras mayúsculas o minúsculas" maxLength="40" required />
                    <span className="fas fa-address-card icon_input"></span>
                    <h4>Autor(es): *</h4>
                    <input type="text" name="book-author" pattern="[A-Za-z]{1,40}" title="Solo letras mayúsculas o minúsculas" maxLength="40" required />
                    <span className="fas fa-address-card icon_input"></span>
                    <h4>Busca tu archivo: *</h4>
                    <span className="fas fa-upload icon_input2"></span>
                    <input type="file" id="input-file" />
                    <label for="input-file" onClick={functionTagInputFile}>Buscar</label>{/* Boton del input file */}
                    <span id="input-file-name" className="text">Nada</span>
                    <br /><br />
                    <button type="submit" className="fas fa-search"> Enviar</button>
                </form>
            </div>
        </div>
    );
}