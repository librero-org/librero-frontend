import './contact-style.css';
import React from 'react';
import { LoaderComponent } from '../loader/loader-component';
import { ScreenErrorComponent } from '../screen-error/screen-error-component';
import { useQuery, gql } from "@apollo/client";

function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      hello
    }
  `);

  if (loading) {
    return (
      <LoaderComponent></LoaderComponent>
    );
  }

  if (error) {
    return (
      <ScreenErrorComponent></ScreenErrorComponent>
    );
  }
  if (data) {
    console.log(data.hello);
    return (
      <div>
        <h2>My first Apollo app 🚀</h2>
        <p>{data.hello}</p>
      </div>
    );
  }
}

export class ContactComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('name: ' + this.state.name);
        console.log('email: ' + this.state.email);
        console.log('mensaje: ' + this.state.message);
    }

    render() {
        return (
            <div>
                <h2>Contáctanos</h2>
                <p>Si tiene alguna duda o comentario, puede ponerse en contacto con nosotros.</p>
                <br />
                <div className="contact-container">
                    <form className="form-contact" onSubmit={this.handleSubmit}>
                        <p>Por favor, llena los campos requeridos.</p>
                        <h4>Nombre: *</h4>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
                        <span className="fas fa-address-card icon_input"></span>
                        <h4>E-mail: </h4>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} required/>
                        <span className="fas fa-envelope-open-text icon_input"></span>
                        <h4>Mensaje: *</h4>
                        <textarea name="message" rows="4" cols="50" value={this.state.message} onChange={this.handleChange} required />
                        <button type="submit" className="fas fa-search"> Enviar</button>
                    </form>
                </div>
            </div>
        );
    }
}