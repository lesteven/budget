import { useState } from 'react';

const useForm = (initialVal = '') => {
  const [value, onChange] = useState(initialVal);
  const formChange = (e) => onChange(e.target.value);
  return [value, formChange, onChange];
}

export default useForm;
