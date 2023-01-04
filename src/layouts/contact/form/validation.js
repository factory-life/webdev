import { isValidEmailAddress } from "./helpers";

const validateContact = ({
  name,
  surname,
  email,
  mobile,
  message
}) => {
  const errors = {};

  if(!(!!message && message.trim().length >= 3 && message.trim().length <= 1000)) {
    errors.message = 'Please provide a message.';
  }

  if(!(!!mobile && mobile.trim().length >= 3 && mobile.trim().length <= 150)) {
    errors.mobile = 'Please provide a contact number.';
  }

  if(!(!!name && name.trim().length >= 3 && name.trim().length <= 150)) {
    errors.name = 'Please provide a first name';
  }

  if(!(!!surname && surname.trim().length >= 3 && surname.trim().length <= 150)) {
    errors.surname = 'Please provide a surname.';
  }

  if(!(!!email && email.length >= 3 && email.length <= 150 && isValidEmailAddress(email))) {
    errors.email = 'Please provide a valid email address.';
  }

  // console.log(captcha, 'validation captcha');
  //
  // if(!captcha) {
  //   errors.captcha = "Something went wrong.";
  // }

  return errors;
};

export default validateContact;