import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'query-string';
import css from '../css/month.css';

const Month = (props) => {
  const query = qs.parse(location.search);
  const data = useSelector(state => state.data);
  let currMonth;
  if (data.length > 0 && query) {
    console.log(data, query);  
    currMonth = data[query.index];
    console.log(currMonth);
  }
  if (currMonth) {
    return (
      <div className = 'month'>
        <p> Month: { currMonth.month }</p>
        <p> Year: { currMonth.year }</p>
        <p> Budget: { currMonth.budget } </p>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Month;
