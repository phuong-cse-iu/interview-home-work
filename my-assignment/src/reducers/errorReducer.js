import { POST } from "../constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case POST.LOAD_FAILED:
      return action.error;
    case POST.LOADING:
    case POST.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
