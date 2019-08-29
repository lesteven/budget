import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import css from './css/nav.css';

const NavBar = () => {
  const filteredRoutes = routes.slice(0,routes.length-1);
  return (
    <nav className = 'nav-bar'>
      {filteredRoutes.map(e => 
        <NavLink to = {e.path} 
          exact = {e.exact}
          activeStyle={{
            backgroundColor: 'navy',
            color: 'white'
          }}
          key = {e.path}> {e.title} </NavLink>
      )}
    </nav>
  )
}


export default NavBar;
