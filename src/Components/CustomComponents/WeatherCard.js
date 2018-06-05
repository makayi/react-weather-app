import React from 'react';

const WeatherCard = props => (
  <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">{props.weatherInfo.city}</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        <span>
          <img src={props.weatherInfo.iconUrl} alt="weather information"/>{' '}
        </span>{' '}
        {props.weatherInfo.desc}
      </h6>
      <p className="card-text">{props.weatherInfo.temp}</p>
      <a href="https://reactjs.org/" className="card-link">
        Card link
      </a>
      <a href="https://reactjs.org/" className="card-link">
        Another link
      </a>
    </div>
  </div>
);

export default WeatherCard;
