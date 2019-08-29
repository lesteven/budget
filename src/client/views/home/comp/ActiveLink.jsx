import React, { useState, useEffect }from 'react';
import { NavLink } from 'react-router-dom';
import qs from 'query-string';

const ActiveLink = ({data, e, name}) => {
  const query = qs.parse(location.search);
  const active = query.month == data[e].month && query.year == data[e].year;
  const activeStyle = {
    backgroundColor: '#00004d',
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '10% auto',
    color: 'white'
  }
  return (
    <NavLink 
      style = { active? activeStyle : {} }
      className = 'histLink'
      to = {`date?month=${data[e].month}&year=${data[e].year}`} 
      > {name}</NavLink>
  )
}

export default ActiveLink