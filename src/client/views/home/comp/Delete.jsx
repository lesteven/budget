import React, { useEffect } from 'react';
import css from '../css/delete.css';
import { update } from '../../../redux/data';
import { useDispatch } from 'react-redux';

const Delete = ({ currMonth, data }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    const copy = {...data};
    const name =`${currMonth.month}_${currMonth.year}`;
    delete copy[name];
    localStorage.setItem('history', JSON.stringify(copy));
    dispatch(update(copy));
  }
  return (
    <button className = 'deleteHist' onClick = { onClick}> 
      Delete Month </button>
  )
}

export default Delete;
