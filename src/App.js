import React, { Component } from 'react';
import './App.css';
import logo from './logo2.svg';


//CUSTOM COMPONENTS
import Login from '../src/components/Login'
import Main from '../src/components/main'

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
        <div className="container">
           <div className="col-md-12">
              <div className="row">
                <Main title={this.state.voluntariado} boton={this.state.boton1}></Main>
                <Main title={this.state.causa} boton={this.state.boton1}></Main>
                <Main title={this.state.donacion} boton={this.state.boton2}></Main>
                <Main title={this.state.acreditarDonacion} boton={this.state.boton3}></Main>
                <Main title={this.state.solicitarVoluntariado} boton={this.state.boton2}></Main>
                <Main title={this.state.voluntariado} boton={this.state.boton1}></Main>
              </div>
            </div>
        </div>
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

export default App;
