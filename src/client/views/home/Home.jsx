import React from 'react';
import css from './home.css';
import History from './comp/History';
import Plan from './comp/Plan';


const Home = () => {
  return (
    <section className='home'>
      <History/>
      <Plan/>
    </section>
  )
}

export default Home;
