import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <NavLink to="/simple/states">with States</NavLink>
      <span>{'\t'}</span>
      <NavLink to="/simple/redux">with Redux</NavLink>
    </nav>
  );
}

export default NavigationBar;
