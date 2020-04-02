import React, { Component } from 'react';
import Logo from "../images/logo-2.png";


class Home extends Component {
    render() {
      return (
        <div className="container">
          <img className="imgLogo" alt="Logo" src={Logo} />
          <h1>Ingresa tus síntomas</h1>
          <h2>Síntomas</h2>
          <textarea></textarea>
          <h2>Antecedentes</h2>
          <textarea></textarea>
          <h2>Medicamentos que consume</h2>
          <textarea></textarea>
          <h2>Inicio de síntomas</h2>
          <input></input>
          <h2>Número telefónico</h2>
          <input></input>
          <button>Continuar</button>
        </div>
    );
  }
}


export default Home;