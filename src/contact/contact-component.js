import './contact-style.css';
import React from 'react';
import { useMutation, gql } from "@apollo/client";
import Swal from 'sweetalert2';

const SEND_CONTACT_EMAIL = gql`
  mutation($data: SendContactEmailInput!) {
    sendContactEmail(data: $data)
  }
`;

export function ContactComponent() {
  const [mutate, { data, loading, error }] = useMutation(SEND_CONTACT_EMAIL);
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

    name.value = "";
    email.value = "";
    message.value = "";
  }

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
      title: 'Mensaje enviado correctamente',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    })
  }

  return (
    <div>
      <h2>Contáctanos</h2>
      <p>Si tiene alguna duda o comentario, puede ponerse en contacto con nosotros.</p>
      <br />
      <div className="contact-container">
        <form className="form-contact" onSubmit={handleSubmit} >
          <p>Por favor, llena los campos requeridos.</p>
          <h4>Nombre: *</h4>
          <input type="text" name="name" ref={(node => name = node)} pattern="[A-Za-z]{1,40}" title="Solo letras mayúsculas o minúsculas" maxLength="40" required />
          <span className="fas fa-address-card icon_input"></span>
          <h4>E-mail: </h4>
          <input type="email" name="email" ref={(node => email = node)} required />
          <span className="fas fa-at icon_input"></span>
          <h4>Mensaje: *</h4>
          <textarea name="message" ref={(node => message = node)} maxLength="500" required />
          <span className="fas fa-edit icon_textarea"></span>
          <button type="submit" className="fas fa-search"> Enviar</button>
        </form>
      </div>
    </div>
  );
}
