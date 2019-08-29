import React from 'react';
import qs from 'query-string';
import { useSelector } from 'react-redux';
import AddExpen from './AddExpen';
import Donut from './Donut';

const Expenditure = ({ currMonth, data }) => {
  return (
    <div>
      <h3> Expenditure: </h3>
      <AddExpen currMonth = { currMonth } data = { data }/>
      { currMonth.expenditure? 
          Object.keys(currMonth.expenditure).map((key,index) => (
          <p key = { key }> 
            { `${key} : ${currMonth.expenditure[key]}` } </p>
        )): null
      }
      <Donut currMonth = { currMonth }/>
    </div>
  )
}


export default Expenditure;
