import React from 'react';
import qs from 'query-string';
import { useSelector } from 'react-redux';
import AddExpen from './AddExpen';

const Expenditure = () => {
  const query = qs.parse(location.search);
  const data = useSelector(state => state.data);
  let currMonth = {};
  if (data) {
    currMonth = data[query.index];
  }
  console.log(currMonth);
  return (
    <div>
      <h3> Expenditure: </h3>
      <AddExpen />
      { currMonth.expenditure? 
          Object.keys(currMonth.expenditure).map((key,index) => (
          <p key = { key }> 
            { `${key} : ${currMonth.expenditure[key]}` } </p>
        )): null
      }
    </div>
  )
}


export default Expenditure;
