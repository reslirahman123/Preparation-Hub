import React, { useReducer } from 'react';

// Reducer function
function formReducer(state, action) {
  switch (action.type) {
    case 'updateField':
      return { ...state, [action.field]: action.value };
    case 'reset':
      return { name: '', email: '' };
    default:
      throw new Error('Unknown action');
  }
}

function Form() {
  const initialState = { name: '', email: '' };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'updateField', field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', state);
    dispatch({ type: 'reset' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
