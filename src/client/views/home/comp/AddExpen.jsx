import React from 'react';
import { useSelector } from 'react-redux';
import useForm from '../../../custHooks/useForm';
import qs from 'query-string';
import { useDispatch } from 'react-redux';
import { update } from '../../../redux/data';


const options = ['Food', 'Rent', 'Bills','Housing', 'Transportation',
  'Debt', 'Recreational']

const AddExpen = ({ currMonth, data }) => {
  const [value, onChange, manualChange] = useForm();
  const [selValue, onSelect] = useForm(options[0]);
  const query = qs.parse(location.search);

  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    const num = Number.parseFloat(value);

    if (!currMonth.expenditure) {
      currMonth.expenditure = {};
    }
    if (!currMonth.expenditure[selValue]) {
      currMonth.expenditure[selValue] = 0;
    }
    currMonth.expenditure[selValue] += num;

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
