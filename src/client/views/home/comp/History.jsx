import React, { useState, useEffect }from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from '../css/history.css'
import ActiveLink from './ActiveLink';

const History = (props) => {
  const data = useSelector(state => state.data);
  return (
    <div className = 'history'>
      <p> History </p>
      { Object.keys(data).map((e,index) => {
        const name = `${data[e].month} ${data[e].year}`;
        return <ActiveLink key= {name} e = {e} data = {data} name={name}/>
        }
      )}
    </div>
  )
}

export default History;
