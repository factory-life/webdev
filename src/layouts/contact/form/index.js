import React from 'react';
import {
  Container,
  ContainerInner,
  ButtonLink,
  Button,
  Buttons,
  Splitter,
  Column,
  DropdownColumn,
  PlainForm,
  BackgroundWrapper,
  InlineLoader,
  ResultContainer,
  Content,
  Title,
  Icon,
  AiOutlineCheck
} from './style';

import validate from "./validation";
import { Form, Field } from "react-final-form";
import withFormState from './with-form-state';
import TextInput from 'components/form/fields/text-input';
import TextAreaInput from 'components/form/fields/textarea-input';

//
// export const requestTypes = {
//   'membership': 'Business Membership',
//   'inquiry': 'General Inquiry',
//   'investment': 'Investment Inquiry',
//   'collaboration': 'Collaboration',
//   'other': 'Other'
// };

const Success = () => (
  <ResultContainer>
    <Content>
      <Icon>
        <AiOutlineCheck />
      </Icon>
      <Title>
        Message sent successfully.
      </Title>
    </Content>
  </ResultContainer>
);

const ContactForm = ({ sendState, loadingSubmit, onSubmit }) => (
  <BackgroundWrapper>
    <Container>
      <ContainerInner>
      {sendState === "success" && <Success />}
      {sendState !== "success" && (
        <Form
          initialValues={{
            email: '',
            name: '',
            surname: '',
            mobile: '',
            message: ''
          }}
          onSubmit={onSubmit}
          validate={validate}
        >
          {({handleSubmit}) => (
            <PlainForm onSubmit={handleSubmit}>
              <Title>Contact Us</Title>
              <Field
                name="name"
                component={TextInput}
                placeholder='Name'
                label='Name'
              />
              <Field
                name="surname"
                component={TextInput}
                placeholder='Surname'
                label='Surname'
              />
              <Field
                name="mobile"
                component={TextInput}
                placeholder='Mobile'
                label='Mobile'
              />
              <Field
                name="email"
                component={TextInput}
                type="email"
                placeholder='Email address'
              />
              <Field
                name="message"
                component={TextAreaInput}
                type="textarea"
                placeholder='Message'
                label='Message'
              />
              <Buttons>
                <Button type="submit">
                  Submit
                  {!!loadingSubmit && <InlineLoader />}
                </Button>
              </Buttons>
            </PlainForm>
          )}
        </Form>
      )}
      </ContainerInner>
    </Container>
  </BackgroundWrapper>
);

export default withFormState(ContactForm);