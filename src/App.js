//App.js
import React, { Component } from 'react';
// import {DisplayMapClass} from './DisplayMapClass';
import Welcome from './Views/Welcome';
import Login from './Views/Login'
import Home from './Views/Home'
import RegisterPatient from './Views/RegisterPatient';
import MapPatient from './Views/MapPatient';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterDoc from './Views/RegisterDoc';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/RegisterPatient">
            <RegisterPatient />
          </Route>
          <Route path="/RegisterDoc">
            <RegisterDoc />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;
