import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import FormContainer from './Components/Form';
import NumberList from './Components/List';
import Navbar from './Components/Navbar';

class App extends Component {
  numbers=[1,2,4,5]
  render() {
    return (
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <div className="container">
          <div className="row">
             <div className="col-12">
             <NumberList numbers={this.numbers}/>
             </div>
          </div>
        </div>

         
      </div>
    );
  }
}

export default App;
