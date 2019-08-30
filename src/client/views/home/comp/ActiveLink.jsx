import React, { useState, useEffect }from 'react';
import { NavLink } from 'react-router-dom';
import qs from 'query-string';
import Delete from './Delete';


// ActiveLink styles links based on query parameters
// Whichever link is clicked, will be styled

const ActiveLink = ({data, e, name}) => {
  const query = qs.parse(location.search);
  const active = query.month == data[e].month && query.year == data[e].year;
  const activeStyle = {
    backgroundColor: '#f5f6f9',
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '10% auto',
    color: '#5a5c69'
  }
  return (
    <NavLink 
      style = { active? activeStyle : {} }
      className = 'histLink'
      to = {`date?month=${data[e].month}&year=${data[e].year}`} 
      > {name}
    </NavLink>
  )
}

export default ActiveLink
