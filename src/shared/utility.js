export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

// Handle form validation.
export const checkValidity = (value, rules) => {
  let isValid = true;

  // Check for empty strings.
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  // Check for min length.
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  // Check for max length.
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  return isValid;
};
