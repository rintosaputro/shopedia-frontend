import React from 'react';
import { Button } from 'react-bootstrap';

function CButton({
  classStyle, color, children, ...rest
}) {
  return (
    <Button className={classStyle} variant={color} {...rest}>
      {children}
    </Button>
  );
}

export default CButton;
