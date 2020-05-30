// import { useState } from 'react';

// function useSelectInput(initialValue = {}) {
//   const [state, setState] = useState(initialValue);

//   const onchange = (event) => {
//     setState({
//       ...Object.assign(state, {
//         [event.target.name]: event.target.value,
//       }),
//     });
//   };

//   const reset = () => {
//     for (const value in state) {
//       setState({
//         ...Object.assign(state, { value: '' }),
//       });
//     }
//   };

//   return [state, onchange];
// }

// export default useSelectInput;
