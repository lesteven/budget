import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'query-string';
import css from '../css/month.css';
import Expenditure from './Expenditure';

const Month = (props) => {
  const query = qs.parse(location.search);
  const data = useSelector(state => state.data);
  let currMonth = {};
  if (Object.keys(data).length > 0 && query) {
    const name = `${query.month}_${query.year}`;
    currMonth = data[name];
  }
  if (currMonth && Object.keys(currMonth).length > 0) {
    return (
      <div className = 'month'>
        <h3> Time: </h3>
        <p> Month: { currMonth.month }</p>
        <p> Year: { currMonth.year }</p>
        <p> Budget: { currMonth.budget } </p>
        <Expenditure currMonth = { currMonth } data = { data }/>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Month;
