import { useState } from 'react';

function useSelectInput(initialValue = {}) {
  const [state, setState] = useState(initialValue);

  const onchange = (event) => {
    setState({
      ...Object.assign(state, {
        [event.target.name]: event.target.value,
      }),
    });
  };

  return [state, onchange];
}

export default useSelectInput;
