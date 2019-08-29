import React, { useState } from 'react';
import css from './about.css';

const About = () => {
  const link = 'https://github.com/lesteven/budget';
  return (
    <div className='about'>
      <p> A simple front end budgeting app. Only a demo! </p>
      <p> Visit my 
        <a href = { link } className='ghLink'> github </a>
         page to see the code!
      </p>
    </div>
  )
}

export default About;
