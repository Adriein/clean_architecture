import { useState } from "react";

export default (initialVal = "") => {
  const [value, setValue] = useState(initialVal);

  let timeoutId = undefined;
  const handleChange = (event) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    event.persist();
    timeoutId = setTimeout(() => {
      setValue(event.target.value);
    }, 800);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};



