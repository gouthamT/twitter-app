import React, { useState } from 'react';

function Input(props) {
  const [value, setValue] = useState('');

  return (<input
    value={value}
    onChange={e => setValue(e.target.value)}
    type="text"
    {...props}
  />);

}

export default Input;