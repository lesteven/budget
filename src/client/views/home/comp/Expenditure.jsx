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
      { Object.keys(currMonth.expenditure).map((key,index) => {
          const val = currMonth.expenditure[key];
          if (val > 0) {
           return <p key = { key }> { `${key} : ${val}` } </p>
          }
        })
      }
      <Donut currMonth = { currMonth }/>
    </div>
  )
}


export default Expenditure;
