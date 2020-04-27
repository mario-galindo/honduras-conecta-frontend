import React, { Component } from 'react';
import './App.css';
import logo from './logo2.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


//CUSTOM COMPONENTS
import Login from '../src/components/Login'
import Main from '../src/components/main'
import Nav from './components/Nav';
import About from './components/About';
import BusinessSolutions from './components/BusinessSolutions'

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
            <Route path="/businesssolutions" component={BusinessSolutions}></Route>
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
    <div class="container">
    <div class="mt-5 row ">
      <h3 className="App-header">¿En qué quieres conectarte?</h3>
      </div>
      <div class=" mt-3 row">
      <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
      </div>
  <div class="mt-5 row">
    <div class="col-sm">
      <div className="card">
      <div className="card-body">
      <h5 className="card-title">Voluntariado</h5>
      <p className="card-text">Unete a la causa y se parte del voluntariado.</p>
      <a href="#" className="btn btn-primary">Registrarse</a>
      </div>
      </div>
    </div>
    <div class="col-sm">
    <div className="card">
      <div className="card-body">
      <h5 className="card-title">Causa</h5>
      <p className="card-text">Unete a la causa y se parte del voluntariado.</p>
      <a href="#" className="btn btn-primary">Apoyar</a>
      </div>
      </div>
    </div>
    <div class="col-sm">
    <div className="card">
      <div className="card-body">
      <h5 className="card-title">Donación</h5>
      <p className="card-text">Unete a la causa y se parte del voluntariado.</p>
      <a href="#" className="btn btn-primary">Donar</a>
      </div>
      </div>
    </div>
  </div>
</div>
  </div>
);

export default App;
