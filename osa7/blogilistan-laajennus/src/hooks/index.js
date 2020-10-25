import { useState } from 'react';

const useField = (type, name, placeholder) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => setValue('');

  return {
    type,
    name,
    placeholder,
    value,
    onChange,
    reset,
  };
};

export default useField;
