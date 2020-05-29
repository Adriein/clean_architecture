import { useState } from 'react';
export default (initialVal) => {
  /*{
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    level?: number;
    age?: number;
    height?: number;
    weight?: number;
    notes?: string;
    injuries?: string;
    status?: STATUS;
    rol?: ROL;
    objective?: string;
    }*/
  const [value, setValue] = useState(initialVal);
  const handleChange = (event) => {
    setValue(Object.assign({}, value, { [event.target.name]: event.target.value }));
  };

  return [value, handleChange];
};
