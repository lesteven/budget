import React from 'react';
import { useSelector } from 'react-redux';
import useForm from '../../../custHooks/useForm';
import qs from 'query-string';
import { useDispatch } from 'react-redux';
import { update } from '../../../redux/data';
import { expenditure } from './data';


// keys for expenditure selection types
const options = Object.keys(expenditure);

// Adds expenditure to localstorage and redux store

const AddExpen = ({ currMonth, data }) => {
  const [value, onChange, manualChange] = useForm();
  const [selValue, onSelect] = useForm(options[0]);
  const query = qs.parse(location.search);

  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();

    // value is string, so must be converted before adding
    const num = Number.parseFloat(value);
    currMonth.expenditure[selValue] += num;

    // copy old object to new object and update relevant data
    // then add to localstorage and redux
    const newData = {...data};
   
    const name = `${query.month}_${query.year}`;
    newData[name] = currMonth;
    localStorage.setItem('history', JSON.stringify(newData));
    dispatch(update(newData));
    manualChange('');
  }
  return (
    <form onSubmit = { submit } className = 'formStyle'>
      <select value = { selValue } onChange = { onSelect }>
        { options.map(e => <option value = {e} key = {e} >{e}</option>) }
      </select>
      <input type = 'number' 
        value = { value } 
        placeholder = 'Amount'
        onChange = { onChange }/>
      <input type = 'submit' value = 'Add Expenditure'/>
    </form>
  )
}

export default AddExpen;
