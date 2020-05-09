import React, { useState } from 'react';
import { connect } from 'react-redux';
import { clearFormError } from '../../actions/form';
import Alert from '../../components/alert';

const CustomAlert =  ({message,color, alertVisible, clearFormError, ...props}) => {
  const [visible, setVisible] = useState(alertVisible);

  const onDimiss = () => {
    setVisible(false);
    clearFormError();
  }

  return (
    <Alert message={message} color={color} alertVisible={visible} {...props} onDimiss={onDimiss} />
  );
};

const mapDispachToProps = dispatch => ({
  clearFormError: () => dispatch(clearFormError())
});

export default connect(null, mapDispachToProps)(CustomAlert);