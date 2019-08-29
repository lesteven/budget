import React from 'react';
import { useSelector } from 'react-redux';
import useForm from '../../../custHooks/useForm';


const options = ['Food', 'Rent', 'Bills','Housing', 'Transportation',
  'Debt', 'Recreational']

const AddExpen = () => {
  const [value, onChange] = useForm();
  const submit = (e) => {
    console.log(value);
    e.preventDefault();
  }
  return (
    <form onSubmit = { submit } className = 'formStyle'>
      <select>
        { options.map(e => <option value = {e} key = {e} >{e}</option>) }
      </select>
      <input type = 'text' value = { value } onChange = { onChange }/>
      <input type = 'submit' value = 'Add Expenditure'/>
    </form>
  )
}

export default AddExpen;
