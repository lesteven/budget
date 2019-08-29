import React, { useEffect } from 'react';
import css from './css/home.css';
import History from './comp/History';
import Plan from './comp/Plan';
import { useDispatch } from 'react-redux';
import { update } from '../../redux/data';


const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('history')) || [];
    dispatch(update(arr)); 
  }, [])
  return (
    <section className='home'>
      <History/>
      <Plan/>
    </section>
  )
}

export default Home;
