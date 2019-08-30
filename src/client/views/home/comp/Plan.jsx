import React from 'react';
import AddMonth from './AddMonth';
import Month from './Month';
import css from '../css/plan.css';

const Plan = () => {
  return (
    <section className = 'plan'>
      <p> Plan </p>
      <div className = 'planWrap'>
        <AddMonth />
        <Month />
      </div>
    </section>
  )
}

export default Plan;
