import { POST } from '../constants';

export default (state = '', action) => {
  switch (action.type) {
    case POST.SEARCH_POST:
      return action.name;
    default:
      return state;
  }
};
