import React, { useState } from 'react';
import { UncontrolledAlert, Alert } from 'reactstrap';

export default ({message,color, ...props}) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <div>
      <UncontrolledAlert color={color} isOpen={visible} toggle={onDismiss} fade={false}>
        {message}
      </UncontrolledAlert>
    </div>
  );
};
