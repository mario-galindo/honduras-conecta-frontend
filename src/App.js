import React, { Component } from 'react';
import './App.css';

//CUSTOM COMPONENTS
import Login from '../src/components/Login'

class App extends Component {

  state = {
    isSignedIn: false
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
          <Login></Login>
        )}
      </div>
    );
  }
}

export default App;
