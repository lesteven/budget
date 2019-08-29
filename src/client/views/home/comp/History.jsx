import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = (props) => {
  const data = useSelector(state => state.data);
  return (
    <div className = 'history'>
      <p> History </p>
      { data.map((e,index) => {
        const name = `${e.month} ${e.year}`;
        return <Link 
          to = {`date?month=${e.month}&year=${e.year}&index=${index}`} 
          key = {`${name}_${index}`}> {name}</Link>
        }
      )}
    </div>
  )
}

export default History;
