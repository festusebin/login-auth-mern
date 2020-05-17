const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = data => {
  let errors = {};

  // Use validator function to convert empty fields to empty string
  data.name = !isEmpty(data.name) ? data.name: '';
  data.email = !isEmpty(data.email) ? data.email: '';
  data.password = !isEmpty(data.password) ? data.password: '';
  data.password2 = !isEmpty(data.password2) ? data.password2: '';

  // Check if name empty
  if (validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  // Check if email empty
  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid!'
  }

  // Check if password is empty
  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  } 

  // check if confirm password is empty
  if (validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password is required';
  }

  // Check the length of the password if less than 6 chars
  if (!validator.isLength(data.password, { min: 6, max: 30 } )) {
    errors.password = 'Password must be at least 6 characters';
  } 

  // Check if the password is same with the confirm password
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords are not the same!';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};