import React from 'react';
import Add from './Add';
import Month from './Month';
import css from '../css/plan.css';

const Plan = () => {
  return (
    <section className = 'plan'>
      <p> Plan </p>
      <div className = 'planWrap'>
        <Add />
        <Month />
      </div>
    </section>
  )
}

export default Plan;
