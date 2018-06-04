import React,{Fragment} from 'react'



const WeatherCard=(props)=>(
<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{props.weatherInfo.city}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.weatherInfo.desc}</h6>
    <p className="card-text">{props.weatherInfo.temp}</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
);


export default WeatherCard