import React from 'react';
import css from '../css/clearAll.css';
import { clear } from '../../../redux/data';
import { withRouter } from 'react-router';

const ClearAll = (props) => {
  const onClick = () => {
    localStorage.removeItem('history');
    clear()
    props.history.push('/');
  }
  return (
    <div className = 'clearAll'>
      <button className = 'delete'
        onClick = { onClick }>Delete All!</button>
    </div>
  )
}

export default withRouter(ClearAll);
