import React, { useReducer } from 'react';
import './Form.css';

// Reducer function for form state management
function formReducer(state, action) {
  switch (action.type) {
    case 'updateField':
      return { ...state, [action.field]: action.value };
    case 'reset':
      return action.initialState || {};
    case 'setErrors':
      return { ...state, errors: action.errors };
    default:
      throw new Error('Unknown action');
  }
}

// Form Field Configuration structure
const FormFieldConfig = {
  text: 'text',
  email: 'email',
  tel: 'tel',
  number: 'number'
};

function Form({ 
  fields = [], 
  sections = null,
  initialData = {}, 
  onSubmit, 
  onCancel,
  submitButtonText = 'Submit',
  cancelButtonText = 'Cancel',
  className = ''
}) {
  const [state, dispatch] = useReducer(formReducer, { ...initialData, errors: {} });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'updateField', field: name, value });
    
    // Clear field error when user starts typing
    if (state.errors && state.errors[name]) {
      const newErrors = { ...state.errors };
      delete newErrors[name];
      dispatch({ type: 'setErrors', errors: newErrors });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    // Get all fields from sections or fields prop
    const allFields = sections ? sections.flatMap(section => section.fields) : fields;
    
    allFields.forEach(field => {
      if (field.required && (!state[field.name] || state[field.name].trim() === '')) {
        errors[field.name] = `${field.label} is required`;
      }
      
      // Email validation
      if (field.type === 'email' && state[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(state[field.name])) {
          errors[field.name] = 'Please enter a valid email address';
        }
      }
      
      // Phone number validation
      if (field.type === 'tel' && state[field.name]) {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(state[field.name].replace(/\D/g, ''))) {
          errors[field.name] = 'Please enter a valid 10-digit phone number';
        }
      }
      
      // PAN validation (format: AAAAA9999A)
      if (field.name === 'pan' && state[field.name]) {
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!panRegex.test(state[field.name].toUpperCase())) {
          errors[field.name] = 'Please enter a valid PAN (e.g., ABCDE1234F)';
        }
      }
      
      // GSTIN validation (format: 99AAAAA9999A9A9)
      if (field.name === 'gstin' && state[field.name]) {
        const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
        if (!gstinRegex.test(state[field.name].toUpperCase())) {
          errors[field.name] = 'Please enter a valid GSTIN';
        }
      }
    });
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'setErrors', errors });
      return;
    }
    
    if (onSubmit) {
      onSubmit(state);
    }
  };

  const handleCancel = () => {
    dispatch({ type: 'reset', initialState: initialData });
    if (onCancel) {
      onCancel();
    }
  };

  const renderField = (field) => (
    <div key={field.name} className="form-field">
      <label htmlFor={field.name} className="form-label">
        {field.label}
        {field.required && <span className="required">*</span>}
      </label>
      <input
        id={field.name}
        name={field.name}
        type={field.type || 'text'}
        value={state[field.name] || ''}
        onChange={handleChange}
        placeholder={field.placeholder || ''}
        className={`form-input ${state.errors && state.errors[field.name] ? 'error' : ''}`}
      />
      {state.errors && state.errors[field.name] && (
        <span className="error-message">{state.errors[field.name]}</span>
      )}
    </div>
  );

  const renderSections = () => {
    if (!sections) {
      return fields.map(renderField);
    }

    return sections.map(section => (
      <div key={section.title} className="form-section">
        <h3 className="section-title">{section.title}</h3>
        <div className="section-fields">
          {section.fields.map(renderField)}
        </div>
      </div>
    ));
  };

  return (
    <form onSubmit={handleSubmit} className={`form ${className}`}>
      {renderSections()}
      
      <div className="form-buttons">
        <button 
          type="submit" 
          className="btn btn-secondary submit-btn"
        >
          {submitButtonText}
        </button>
        <button 
          type="button" 
          onClick={handleCancel}
          className="btn btn-default cancel-btn"
        >
          {cancelButtonText}
        </button>
      </div>
    </form>
  );
}

export default Form;
export { FormFieldConfig };