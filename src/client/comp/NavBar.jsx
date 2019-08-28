import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import css from './css/nav.css';

const NavBar = () => {
  return (
    <nav className = 'nav-bar'>
      {routes.map(e => 
        <Link to = {e.path} key = {e.path}> {e.title} </Link>
      )}
    </nav>
  )
}


export default NavBar;
