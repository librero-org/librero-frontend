import './contact-style.css';
import { sendEmail } from "./sendEmail";

export function ContactComponent() {
    return (
        <div>
            <h2>Contáctanos</h2>
            <p>Si tiene alguna duda o comentario, puede ponerse en contacto con nosotros.</p>
            <br />
            <div className="contact-container">
                <div className="form-contact">
                    <p>Por favor, llena los campos requeridos.</p>
                    <h4>Nombre: *</h4>
                    <input type="text" className="fas fa-address-card" id="name" />
                    <h4>E-mail: </h4>
                    <input type="text" className="fas fa-address-card" id="email" />
                    <h4>Mensaje: *</h4>
                    <textarea name="" rows="4" cols="50" id="message"></textarea>
                    <button type="submit" className="fas fa-search" id="submit" onClick={sendEmail}>Enviar</button>
                </div>
            </div>
        </div>
    );
}