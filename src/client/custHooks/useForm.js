import { useState } from 'react';

const useForm = () => {
  const [value, onChange] = useState('');
  const formChange = (e) => onChange(e.target.value);
  return [value, formChange];
}

export default useForm;
