import React from 'react';
import Header from '../../components/header';
import { connect } from 'react-redux';

const HeaderContainer = ({user, ...props }) => {
  return <Header user={user.currentUser} {...props} />;
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, null)(HeaderContainer);
