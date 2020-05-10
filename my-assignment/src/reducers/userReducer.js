import { USER } from '../constants';

const initialState = {
  currentUser: null,
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER.SIGN_IN:
      const newUsers = state.users.find(
        (user) => user && user.id && action.profile.googleId === user.id
      );
      if (!newUsers) {
        const { googleId, name } = action.profile;
        return {
          ...state,
          currentUser: action.profile,
          users: [...state.users, { id: googleId, username: name }],
        };
      }
      return { ...state, currentUser: action.profile };
    case USER.SIGN_OUT:
      return { ...state, currentUser: null };
    case USER.FETCH_SUCCESS:
      // Since we persist posts inside local storage, we need to de-duplicate users that already exist
      const ids = new Set(state.users.map((user) => user.id));
      const addedUsers = [
        ...state.users,
        ...action.users.filter((user) => !ids.has(user.id)),
      ];
      return { ...state, users: [...addedUsers] };
    default:
      return state;
  }
};
