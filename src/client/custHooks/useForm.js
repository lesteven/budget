import { useState } from 'react';

const useForm = (initialVal = '') => {
  const [value, onChange] = useState(initialVal);
  const formChange = (e) => onChange(e.target.value);
  return [value, formChange];
}

export default useForm;
