import React, { useState, useEffect }from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from '../css/history.css'
import ActiveLink from './ActiveLink';
import useForm from '../../../custHooks/useForm';

// displays all monthly budgets 
// includes basic search functionality

const History = (props) => {
  const data = useSelector(state => state.data);
  const [search, onChange] = useForm(); 
  return (
    <div className = 'history'>
      <p> History </p>
      <input 
        type = 'text' 
        value = { search }
        onChange = { onChange }
        placeholder = 'Search' 
        className = 'search'/>
      { Object.keys(data).map((e,index) => {
        const name = `${data[e].month} ${data[e].year}`;
          if (inSearch(name, search, data, e)) {
            return <ActiveLink key= {name} e = {e} data = {data} name={name}/>
          }
        }
      )}
    </div>
  )
}

function inSearch(name, search, data, e) {
  search = search.toLowerCase()
  const month = data[e].month.toLowerCase();
  const year = data[e].year + "";
  return search.includes(month) || 
         month.includes(search) || 
         year.includes(search);
}

export default History;
