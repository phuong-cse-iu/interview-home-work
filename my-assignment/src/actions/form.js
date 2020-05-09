import { FORM } from '../constants';

const setFormError = (message, color) => ({
  type: FORM.ERROR,
  payload: {
    message,
    color
  }
});

const clearFormError = () => ({
  type: FORM.CLEAR_ERROR,
})

export { setFormError, clearFormError };
