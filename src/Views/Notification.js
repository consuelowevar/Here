import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/logo-2.png";

class Notification extends Component {
    render() {
        return (
            <div className="row section container">
                <a href=""><img className="imgLogo" alt="Logo" src={Logo} /></a>
                <div className="card light-green lighten-5">
                    <div className="card-content center">
                        <h1 className="col s12 m12 l12">Se le notificará cuando se acepte su solicitud</h1>
                        <h3>
                            Se le notificará cuando se acepte su solicitud
              </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notification;