import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import FormContainer from './Components/Form';
import NumberList from './Components/List';
import Navbar from './Components/Navbar';
import WeatherCard from './Components/CustomComponents/WeatherCard'

class App extends Component {
  WEATHER_BASE_URL="http://api.openweathermap.org/data/2.5/weather?q="
  appid="68bceb4fa74247f891b72a68a008b413"
  constructor(props){
    super(props);
    this.state={
      city:'',
      data: {}
    },
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  getWeatherFromApiAsync(city) {
    return fetch(this.WEATHER_BASE_URL+this.state.city+"&appid="+this.appid)
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
        this.setState({
          data: {"city":responseJson.name,"temp":responseJson.main.temp,"weather":responseJson.weather[0].main,"desc":responseJson.weather[0].description}
        })
      
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleSubmit(e){
    e.preventDefault()
    this.getWeatherFromApiAsync(this.state.city)
    console.log(e)
   }
    
   handleChange = ({target:{value}}) => {
     this.setState({
       city:value,
     })
   }
  render() {
    return (
      <div className="App">
        <header>
          <Navbar 
            handleSubmit={this.handleSubmit}
            handleCityChange={e => this.handleChange(e)}
            city={this.state.city}
            />
        </header>
        <div className="container">
          <div className="row">
             <div className="col-12">
              <WeatherCard weatherInfo={this.state.data} />
             </div>
          </div>
        </div>

         
      </div>
    );
  }
}

export default App;
