import React from 'react';
import { Input, Error } from '../styles';
import { Container } from './styles';

const TextInput = ({ smallForm = false, input, input: { name }, meta: { error, dirty, touched }, label, ...rest }) => (
  <Container smallForm={smallForm}>
    <Input
      {...input}
      {...rest}
    />
    {error && (touched || dirty) && <Error>{error}</Error>}
  </Container>
);

export default TextInput;