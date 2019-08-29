import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'query-string';
import css from '../css/month.css';
import Expenditure from './Expenditure';

const Month = (props) => {
  const query = qs.parse(location.search);
  const data = useSelector(state => state.data);
  let currMonth;
  if (data.length > 0 && query) {
    currMonth = data[query.index];
  }
  if (currMonth) {
    return (
      <div className = 'month'>
        <h3> Time: </h3>
        <p> Month: { currMonth.month }</p>
        <p> Year: { currMonth.year }</p>
        <p> Budget: { currMonth.budget } </p>
        <Expenditure />
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Month;
