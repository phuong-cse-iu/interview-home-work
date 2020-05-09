import { POST } from '../constants';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case POST.LOADING: 
      return true;
    case POST.LOAD_SUCCESS:
        return false;
    default:
      return state;
  }
};

export default loadingReducer;