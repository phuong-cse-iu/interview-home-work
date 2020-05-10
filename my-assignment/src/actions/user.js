import { USER } from '../constants';

const signin = (profile) => ({
  type: USER.SIGN_IN,
  profile,
});

const signout = () => ({
  type: USER.SIGN_OUT,
});

const addUser = user => ({
  type: USER.ADD_USER,
  user
});

const setUsers = users => ({
  type: USER.FETCH_SUCCESS,
  users,
})

export { signin, signout, addUser, setUsers };
