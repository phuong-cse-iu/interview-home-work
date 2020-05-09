import React from 'react';
import { Alert } from 'reactstrap';

const CustomAlert = ({
  message,
  color,
  alertVisible,
  onDimiss,
  ...props
}) => (
  <Alert color={color} isOpen={alertVisible} toggle={onDimiss} {...props}>
    {message}
  </Alert>
);

export default CustomAlert;
