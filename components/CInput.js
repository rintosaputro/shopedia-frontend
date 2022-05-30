import React from 'react';
import { Form } from 'react-bootstrap';

function CInput({
  typeInput, as, classVariant, children, ...rest
}) {
  return (
    <Form.Control as={as} type={typeInput} className={classVariant} {...rest} />
  );
}

export default CInput;
