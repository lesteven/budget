import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = (props) => {
  const data = useSelector(state => state.data);
  return (
    <div className = 'history'>
      <p> History </p>
      { Object.keys(data).map((e,index) => {
        const name = `${data[e].month} ${data[e].year}`;
        return <Link 
          to = {`date?month=${data[e].month}&year=${data[e].year}`} 
          key = {`${data[e].month}_${data[e].year}`}> {name}</Link>
        }
      )}
    </div>
  )
}

export default History;
