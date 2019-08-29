import React, { useState, useEffect } from 'react';
import useForm from '../../../custHooks/useForm';
import { useDispatch } from 'react-redux';
import { update } from '../../../redux/data';

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
const years = [2019,2020,2021,2022,2023,2024,2025];

const Add = () => {
  const [budgetVal, onChange ] = useForm();
  const [month, monthChange] = useForm(months[0]);
  const [year, yearChange ] = useForm(years[0]);
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const arr = JSON.parse(localStorage.getItem('history')) || [];
    console.log(arr);
    const data = {
      month,
      year,
      budget: budgetVal
    }
    arr.push(data);
    localStorage.setItem('history', JSON.stringify(arr));
    dispatch(update(arr));
  }
  return (
    <section className = 'add' onSubmit = { submit }>
      <form className = 'createBudget'>
        <select value = { month } onChange = { monthChange }>
          { months.map(e => <option value = {e} key = {e} >{e}</option>) }
        </select>
        <select value = { year } onChange = { yearChange }>
          { years.map(e => <option value = {e} key = {e} >{e}</option>) }
        </select>
        <input type = 'text' 
          onChange = { onChange }
          placeholder = 'Budget'/>
        <input type = 'submit' value='Add'/>
      </form>
    </section>
  )
}

export default Add;
