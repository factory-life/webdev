import React from 'react';
import { Textarea, Error } from '../styles';
import { Container } from './styles';

const TextAreaInput = ({ size = 'normal', input = {}, meta: { error, dirty, touched, active } = {}, label = null, ...rest }) => (
  <Container>
    {/*{label && <Label>{label}</Label>}*/}
    <Textarea
      size={size}
      {...input}
      {...rest}
    />
    {/* {error && ((touched && dirty) || active) && <Error>{error}</Error>} */}
    {error && (touched || dirty) && <Error>{error}</Error>}
  </Container>
);

export default TextAreaInput;