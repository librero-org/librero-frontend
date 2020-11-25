import './contact-style.css';
import React from 'react';
import { LoaderComponent } from '../loader/loader-component';
import { ScreenErrorComponent } from '../screen-error/screen-error-component';
import { useQuery, gql } from "@apollo/client";
import { ContactFormComponent } from '../contact-form/contact-form-component';


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
        <p>{data.hello}</p>
        <ContactFormComponent />
      </div>
    );
  }
}

export function ContactComponent() {
  return (
    <ExchangeRates />
  );
}