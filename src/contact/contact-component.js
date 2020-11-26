import './contact-style.css';
import React from 'react';
import { useMutation, gql } from "@apollo/client";

const SEND_CONTACT_EMAIL = gql`
  mutation($data: SendContactEmailInput!) {
    sendContactEmail(data: $data)
  }
`;

export function ContactComponent() {
  const [mutate, data] = useMutation(SEND_CONTACT_EMAIL);
  let name, email, message;

  const handleSubmit = (event) => {
    event.preventDefault();

    mutate({
      variables: {
        data: {
          fromEmailAddress: email.value,
          fromName: name.value,
          message: message.value
        }
      }
    });
  }

  if (data) console.log(data);
  return (
    <div>
      <h2>Contáctanos</h2>
      <p>Si tiene alguna duda o comentario, puede ponerse en contacto con nosotros.</p>
      <br />
      <div className="contact-container">
        <form className="form-contact" onSubmit={handleSubmit}>
          <p>Por favor, llena los campos requeridos.</p>
          <h4>Nombre: *</h4>
          <input type="text" name="name" ref={(node => name = node)} required />
          <span className="fas fa-address-card icon_input"></span>
          <h4>E-mail: </h4>
          <input type="text" name="email" ref={(node => email = node)} required />
          <span className="fas fa-envelope-open-text icon_input"></span>
          <h4>Mensaje: *</h4>
          <textarea name="message" rows="4" cols="50" ref={(node => message = node)} required />
          <button type="submit" className="fas fa-search"> Enviar</button>
        </form>
      </div>
    </div>
  );
}
