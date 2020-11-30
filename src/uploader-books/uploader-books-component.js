export function UploaderBooksComponent (){
    return(
        <div>
      <div className="title">
      <h1>Comparte un libro</h1>
      <hr id="hr1"/>
      <hr id="hr2"/>
      </div>
      <p>Haz crecer este proyecto, se generoso con el mundo y comparte un libro</p>
      <br />
      <div className="contact-container">
        <form className="form-contact">
          <p>Por favor, llena los campos requeridos.</p>
          <h4>Titulo del libro: *</h4>
          <input type="text" name="title" required/>
          <span className="fas fa-address-card icon_input"></span>
          <h4>Autor(es): *</h4>
          <input type="text" name="author" required/>
          <span className="fas fa-at icon_input"></span>
          <button type="submit" className="fas fa-upload"> Subir libro</button>
        </form>
      </div>
    </div>
    );
}