import React, { useState, useEffect } from 'react';
import css from '../css/delete.css';
import { update } from '../../../redux/data';
import { useDispatch } from 'react-redux';

// Deletes selected month
// PopUp prompts up to confirm deletion

const PopUp = ({ deleteData, cancel }) => {
  const [yes, clickYes] = useState(false);
  const [no, clickNo] = useState(false);
  if (yes) {
    deleteData();
    cancel();
  }
  if (no) {
    cancel(); 
  }
  return (
    <div className = 'popUp'>
      <div className= 'popUpInside'>
      <p> Are you sure? </p>
      <div className = 'popButtons'>
        <button onClick = { () => clickYes(true) }> Yes </button>
        <button onClick = { () => clickNo(true) }> No </button>
      </div>
      </div>
    </div>
  )
}



const Delete = ({ currMonth, data }) => {
  const dispatch = useDispatch();

  const deleteData = () => {
    const copy = {...data};
    const name =`${currMonth.month}_${currMonth.year}`;
    delete copy[name];
    localStorage.setItem('history', JSON.stringify(copy));
    dispatch(update(copy));
  }

  const [clicked, change] = useState(false);
  const cancel = () => change(false);

  return (
    <div className = 'delete-wrapper'>
      { clicked? <PopUp 
          deleteData = { deleteData }
          cancel = { cancel }
          /> : null }
    <button className = 'deleteHist' onClick = { () => change(true) }> 
      Delete Month </button>
    </div>
  )
}

export default Delete;
