import { FORM } from "../constants";

const errorReducer = (state = {message: ''}, action) => {
  switch (action.type) {
    case FORM.ERROR:
      return action.payload;
    case FORM.CLEAR_ERROR:
      return '';
    default:
      return state;
  }
};

export default errorReducer;
