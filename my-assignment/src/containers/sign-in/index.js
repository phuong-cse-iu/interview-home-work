import React from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { signin } from '../../actions/user';

const Signin = ({ signin, ...props }) => {
  const responseGoogle = (response) => {
    const { profileObj } = response;
    signin(profileObj);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_SIGNIN_CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      disabled={false}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  signin: (user) => dispatch(signin(user)),
});

export default connect(null, mapDispatchToProps)(Signin);
