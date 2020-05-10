import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { signout } from '../../actions/user';

const Signout = ({ signout, ...props }) => {
  const logout = () => {
    signout();
  };

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_GOOGLE_SIGNIN_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={logout}
    ></GoogleLogout>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signout);
