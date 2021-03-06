import React, { useState, useEffect } from 'react';
import useForm from '../../../custHooks/useForm';
import { useDispatch } from 'react-redux';
import { update } from '../../../redux/data';
import { withRouter } from 'react-router';
import { months, years, expenditure } from './data';

// adds new month to localstorage and redux
// if same month and year is received, app will push that to query

const AddMonth = (props) => {
  const [budgetVal, onChange ] = useForm();
  const [month, monthChange] = useForm(months[0]);
  const [year, yearChange ] = useForm(years[0]);
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    let obj = JSON.parse(localStorage.getItem('history')) || {};
    const name = `${month}_${year}`;
    if (obj[name]) {
      props.history.push(`/date?month=${month}&year=${year}`);
    } else {
      const data = {
        month,
        year,
        budget: Number.parseFloat(budgetVal),
        expenditure: {...expenditure}
      }
      obj = {
        ...obj,
        [name]: data
      }
      localStorage.setItem('history', JSON.stringify(obj));
      dispatch(update(obj));
      props.history.push(`/date?month=${month}&year=${year}`);
    }
  }
  return (
    <section className = 'add' onSubmit = { submit }>
      <form className = 'formStyle'>
        <select value = { month } onChange = { monthChange }>
          { months.map(e => <option value = {e} key = {e} >{e}</option>) }
        </select>
        <select value = { year } onChange = { yearChange }>
          { years.map(e => <option value = {e} key = {e} >{e}</option>) }
        </select>
        <input type = 'number' 
          value = { budgetVal }
          onChange = { onChange }
          placeholder = 'Budget'/>
        <input type = 'submit' value='Add'/>
      </form>
    </section>
  )
}

export default withRouter(AddMonth);
