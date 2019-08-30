import React, { useEffect } from 'react';
import css from './css/home.css';
import History from './comp/History';
import Plan from './comp/Plan';
import { useDispatch } from 'react-redux';
import { update } from '../../redux/data';

const Home = () => {
  const dispatch = useDispatch();

  // grabs data from local storage to fill up page
  // if no data, empty object is given instead
  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem('history')) || {};
    dispatch(update(obj)); 
  }, [])
  return (
    <section className='home'>
      <History/>
      <Plan/>
    </section>
  )
}

export default Home;
