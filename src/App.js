import React, { Component } from 'react';
import './App.css';
import logo from './logo2.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


//CUSTOM COMPONENTS
import Login from '../src/components/Login'
import Main from '../src/components/main'
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop'

class App extends Component {

  state = {
    isSignedIn: true,
    voluntariado:"Registrar Voluntariado",
    causa:"Registrar Causa",
    donacion:"Solicitar Donacion",
    acreditarDonacion:"Acreditar Donacion",
    solicitarVoluntariado:"Solicitar Voluntariado",
    boton1:"Registrar",
    boton2:"Solicitar",
    boton3:"Acreditar"
  }

 
  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <Router>
          <Nav></Nav>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/shop" component={Shop}></Route>
          </Switch>
          </Router>
        ) : (
          <div  className="main-div">
            <img src={logo} className="App-logo" alt="logo"  />
            <input type="email" placeholder="Email..."  />
            <input type="password" placeholder="Password..."  />
            <button >Login to Account</button>
          </div>
        )}
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
