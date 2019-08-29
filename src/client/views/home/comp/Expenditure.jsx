import React from 'react';
import { useSelector } from 'react-redux';
import AddExpen from './AddExpen';

const Expenditure = () => {
  return (
    <div>
      <h3> Expenditure: </h3>
      <AddExpen />
    </div>
  )
}

export default Expenditure;
