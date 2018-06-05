import React from 'react';
import SearchFormContainer from './CustomComponents/SearchFormContainer';

const Navbar = props => {
  const links = ['Home', 'About', 'Contact'];
  const navbarLinks = links.map((link, index) => (
    <li key={index} className="nav-item">
      <a className="nav-link" href="#">
        {link}
      </a>
    </li>
  ));
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Navbar</a>
      <ul className="navbar-nav  justify-content-end"> {navbarLinks}</ul>
      <SearchFormContainer
        handleSubmit={props.handleSubmit}
        handleCityChange={props.handleCityChange}
        city={props.city}
      />
    </nav>
  );
};

export default Navbar;
