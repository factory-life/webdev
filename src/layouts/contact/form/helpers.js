import moment from "moment";
import validator from 'validator';
import { isEqual } from 'lodash';

const isValidEmailAddress = emailAddress => {
  return validator.isEmail(emailAddress);
  // var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  // return pattern.test(emailAddress);
};

const isValidUrl = url => validator.isURL(url);

const isValidPassword = password => !!password && password.trim().length >= 8;
const isValidString = val => !!val && (typeof val === 'string' || val instanceof String);

const isValidStringLength = (val, min, max) => !!val && val.trim().length >= min && val.trim().length <= max;

const isValidValue = (val, values, isMultiple = false) => {
  if(!val) {
    return false;
  }

  if(!isMultiple) {
    return val in values;
  } else if(Array.isArray(val) && Array.isArray(values)) {
    for(let i = 0; i < values.length; i++){
      if(isEqual(val, values[i])) {
        return true;
      }
    }
  }

  return false;
};

const checkUuidInArray = (arr, val, uuidField = 'uuid') => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i][uuidField] === val) {
      return true;
    }
  }
};

const isValidIdValue = (val, values, isMultiple = false, uuidField = 'uuid') => {
  if(!val || !values || values.length === 0) {
    return false;
  }

  if(!isMultiple) {
    return checkUuidInArray(values, val, uuidField);
  } else if(Array.isArray(val) && val.length > 0) {
    for(let i = 0; i < val.length; i++){
      if(!checkUuidInArray(values, val[i], uuidField)) {
        return false;
      }
    }
    return true;
  }

  return false;
};

const isValidDate = val => {
  if (!val) {
    return false;
  }

  const dt = new moment(val);
  return dt.isValid();
};

const isValidDateOfBirth = val => {
  if (!isValidDate(val)) {
    return false;
  }

  const selected = moment(val);
  const diff = selected.diff(moment(), 'years');

  return Math.abs(diff) >= 8;
};

const isNumeric = val => validator.isNumeric(val);

export {
  isValidEmailAddress,
  isValidPassword,
  isValidString,
  isValidStringLength,
  isValidValue,
  isValidDateOfBirth,
  isValidDate,
  isNumeric,
  isValidUrl,
  isValidIdValue
};