import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    isSignedIn: true
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
        <header className="App-header">
          <p>
            Bienvenido a Honduras Conecta
          </p>
        </header>
        ) : (
          <header className="App-header">
            <p>
              Iniciar Sesion
            </p>
          </header>
        )}
      </div>
    );
  }
}

export default App;
