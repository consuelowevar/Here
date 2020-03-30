import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Login extends Component {
    render() {
      return (
        <div className="section">
          <h1>Bienvenido</h1>
        
          <form>
        
            <input id="inputUserName" className="inputText" placeholder="Usuario"></input>
            <input id="inputPassword" className="inputText" placeholder="Password"></input>
            <Link to="/Home">
            <button className="button">Ingresar</button>
            </Link>
          </form>
        </div>
      );
    }
  }

  export default Login;