import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import FormContainer from './Components/Form';
import NumberList from './Components/List';

class App extends Component {
  numbers=[1,2,4,5]
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

        </p>
        <FormContainer/>
         <NumberList numbers={this.numbers}/>
      </div>
    );
  }
}

export default App;
